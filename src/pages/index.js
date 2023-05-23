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
const section = new Section(creatCard, elementsSelector)
api.getDataForInitialPageRendering().then(response => {
  //console.log(response)
  const [userDataFromDB, cardsDataFromDB] = response   //деструктурируем результат выполнения двух фетчей, который пришел в виде массива
  userInfo.setUserInfoDB(userDataFromDB);
  userInfo.setCurrentUserId(userDataFromDB._id);

  section.render(cardsDataFromDB)
})

api.getUserDetailsFromDataBase().then(userDetailsFromDBInJson => {
  // userInfo.setUserInfoDB(userDetailsFromDBInJson);
  // userInfo.setCurrentUserId(userDetailsFromDBInJson._id);
 // console.log(userInfo.getCurrentUserId())

})

function creatCard(cardData) {
  const card = new Card(cardData, '#elementTemplate', popupImageZoom.open);//в рендере создаем карточку (это колбэк фунция для создания карточки)
  return card.generateCard(userInfo.getCurrentUserId()); //и возвращаем методом generate card дом элемент карточки со всеми слушателями
}


api.getInitialCards().then(arrayCardsFromDBInJson => {
 // section.render(arrayCardsFromDBInJson)
})


const popupImageZoom = new PopupWithImage(popupZoomSelector);

const profileEditPopup = new PopupWithForm(popupProfileEditSelector, (event) => {
  event.preventDefault();
  const a = profileEditPopup.getInputValues()
  //console.log(a)
  api.editUserInfoInDb(a.profilename, a.profilestatus)
    .then((userDetails) => {
      userInfo.setUserInfoDB(userDetails)
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });


  profileEditPopup.close()
})



const addPopup = new PopupWithForm(popupAddSelector, (event) => {
  event.preventDefault();
  const newCardData = addPopup.getInputValues()
  api.addNewCardToServer(newCardData.namePlace, newCardData.link)

    .then((cardDetailsFromDB) => {
      const newCard = creatCard(cardDetailsFromDB);
      section.addNewItem(newCard);
      addPopup.close()
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });
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



// const section = new Section({
//   items: initialCards, //мой массив карточек
//   renderer: creatCard
// }, elementsSelector) //создала константу-селектор для контейнера карточек

// section.render()