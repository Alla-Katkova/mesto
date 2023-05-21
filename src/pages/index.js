import './index.css';
import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import Section from '../scripts/components/Section.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import UserInfo from '../scripts/components/UserInfo.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import {
  initialCards,
  profileButtonEdit,
  profileButtonAdd,
  forms,
  validators,
  userInfoConfig,
  elementsSelector,
  popupZoomSelector,
  popupAddSelector,
  popupProfileEditSelector,
  validationConfig
} from '../scripts/utils/constants.js'

import Api from "../scripts/components/Api";



const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-66',
  headers: {
    authorization: '1aec61fe-1188-4176-bdbc-e029c1f00874',
    'Content-Type': 'application/json'
  }
});

const userInfo = new UserInfo(userInfoConfig)

api.getUserDetailsFromDataBase().then(userDetails => {

  userInfo.setUserInfoDB(userDetails)
})

const popupImageZoom = new PopupWithImage(popupZoomSelector);



const profileEditPopup = new PopupWithForm(popupProfileEditSelector, (event) => {
  event.preventDefault();
  userInfo.setUserInfo(profileEditPopup.getInputValues())
  profileEditPopup.close()
})

function creatCard(cardData) {
  const card = new Card(cardData, '#elementTemplate', popupImageZoom.open);//в рендере создаем карточку (это колбэк фунция для создания карточки)
  return card.generateCard(); //и возвращаем методом generate card дом элемент карточки со всеми слушателями
}

const section = new Section({
  items: initialCards, //мой массив карточек
  renderer: creatCard
}, elementsSelector) //создала константу-селектор для контейнера карточек

section.render()

const addPopup = new PopupWithForm(popupAddSelector, (event) => {
  event.preventDefault();
  const newCard = creatCard(addPopup.getInputValues());
  section.addNewItem(newCard);
  addPopup.close()

})

forms.forEach((formElement) => {
  const validator = new FormValidator(validationConfig, formElement);
  validator.enableValidation();
  validators[formElement.getAttribute('name')] = validator;
});

function openPopupProfileEdit() {
  profileEditPopup.setInputValues(userInfo.getUserInfo())
  profileEditPopup.open()
}

function openPopupAdd() {
  addPopup.open()
  validators.popupFormAdd.disableButton()
}

popupImageZoom.setEventListeners();
profileEditPopup.setEventListeners()
addPopup.setEventListeners()

profileButtonEdit.addEventListener("click", openPopupProfileEdit);
profileButtonAdd.addEventListener("click", openPopupAdd);



