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

const popupImageZoom = new PopupWithImage(popupZoomSelector);

const userInfo = new UserInfo(userInfoConfig);

const profileEditPopup = new PopupWithForm(popupProfileEditSelector, (event) => {
  event.preventDefault();
  userInfo.setUserInfo(profileEditPopup.getInputValues())
  profileEditPopup.close()
})

const section = new Section({
  items: initialCards, //мой массив карточек
  renderer: (cardData) => {
    const card = new Card(cardData, '#elementTemplate', popupImageZoom.open);//в рендере создаем карточку (это колбэк фунция для создания карточки)
    return card.generateCard(); //и возвращаем методом generate card дом элемент карточки со всеми слушателями
  }
}, elementsSelector) //создала константу-селектор для контейнера карточек

section.render()

const addPopup = new PopupWithForm(popupAddSelector, (event) => {
  event.preventDefault();
  const sectionForNewCard = new Section({
    items: [addPopup.getInputValues()],
    renderer: (cardData) => {
      const card = new Card(cardData, '#elementTemplate', popupImageZoom.open);//в рендере создаем карточку (это колбэк фунция для создания карточки)
      return card.generateCard(); //и возвращаем методом generate card дом элемент карточки со всеми слушателями
    }
  }, elementsSelector)

  sectionForNewCard.render()
  addPopup.close()
  validators.popupFormAdd.disableButton()
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
}

popupImageZoom.setEventListeners();
profileEditPopup.setEventListeners()
addPopup.setEventListeners()

profileButtonEdit.addEventListener("click", openPopupProfileEdit);
profileButtonAdd.addEventListener("click", openPopupAdd);


