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
  avatarButtonEdit,
  forms,
  validators,
  userInfoConfig,
  elementsSelector,
  popupZoomSelector,
  popupAddSelector,
  popupAvatarSelector,
  popupConfirationDeletionSelector,
  popupProfileEditSelector,
  validationConfig
} from '../scripts/utils/constants.js'

import Api from "../scripts/components/Api";
import PopupWithConfirmation from "../scripts/components/PopupWithConfirmation";

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-66',
  headers: {
    authorization: '1aec61fe-1188-4176-bdbc-e029c1f00874',
    'Content-Type': 'application/json'
  }
});

const popupDeleteCard = new PopupWithConfirmation(popupConfirationDeletionSelector, ({ card, cardId }) => {
  api.deleteCardFromDB(cardId)
    .then((response) => {
      //console.log(response)
      card.removeCard()
      popupDeleteCard.close()
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    })
    .finally(() =>
      popupDeleteCard.setDefaultButtonText() //уберем точки загрузки с кнопки
    )
})

const popupAvatarEdit = new PopupWithForm(popupAvatarSelector, (inputValues) => {  //getInputValues соберет данные с одного импута
 
  popupAvatarEdit.setNewButtonText() // добавим точки при загрузки на кнопку сабмита
  //const avatarPicture = popupAvatarEdit.getInputValues(inputValues)
  //найду src которому хочу присвоить свою картинку
  //document.querySelector(".profile__avatar").src = avatarPicture.avatar
  //console.log(avatarPicture.avatar)
  api.editAvaratInDB(inputValues.avatar)
    .then((response) => {
      userInfo.setUserInfoDB({ avatar: response.avatar, ...response })// в promice all вводила responce, если деструктурирровать только аватар, 
      popupAvatarEdit.close()                                                                // то имя и статус будут пустыми, чтобы не дублировать код - воткнула имя и статус в response  
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() =>
      popupAvatarEdit.setDefaultButtonText() //уберем точки загрузки с кнопки
    )
})

const userInfo = new UserInfo(userInfoConfig)
const section = new Section(creatCard, elementsSelector)

api.getDataForInitialPageRendering().then(response => {
  //console.log(response) тк используем profise all , то responce является массивом результатов всех fetch-ей
  const [userDataFromDB, cardsDataFromDB] = response   //деструктурируем результат выполнения двух фетчей, который пришел в виде массива
  userInfo.setUserInfoDB(userDataFromDB);
  userInfo.setCurrentUserId(userDataFromDB._id);

  section.renderItems(cardsDataFromDB)
})


function creatCard(cardData) { //в рендере создаем карточку (это колбэк фунция для создания карточки)
 // console.log(userInfo.getCurrentUserId())
  const card = new Card(cardData, '#elementTemplate', popupImageZoom.open, popupDeleteCard.open, (likeButton, cardId) => {

    if (likeButton.classList.contains("element__like-button_active")) {

      api.putDislike(cardId)
        .then(response => {
          //console.log(response)
          card.likeToggle(response.likes)
        })
        .catch((error) => console.error(`Ошибка при снятии лайка ${error}`))
    } else {
      api.putLike(cardId)
        .then(response => {
          card.likeToggle(response.likes)
         // console.log(response)
        })
        .catch((error) => console.error(`Ошибка при добалении лайка ${error}`))
    }

  }, userInfo.getCurrentUserId())

  return card.generateCard(); //и возвращаем методом generate card дом элемент карточки со всеми слушателями
}

const popupImageZoom = new PopupWithImage(popupZoomSelector);

const profileEditPopup = new PopupWithForm(popupProfileEditSelector, (inputValues) => {
  
  profileEditPopup.setNewButtonText() // добавим точки при загрузки на кнопку сабмита
  //const newUserInfoData = profileEditPopup.getInputValues()
  api.editUserInfoInDb(inputValues.profilename, inputValues.profilestatus)

    .then((userDetails) => {
      userInfo.setUserInfoDB(userDetails)
      profileEditPopup.close()
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    })
    .finally(() =>
      profileEditPopup.setDefaultButtonText() //уберем точки загрузки с кнопки
    )

})

const addPopup = new PopupWithForm(popupAddSelector, (inputValues) => {
 
  addPopup.setNewButtonText() // добавим точки при загрузки на кнопку сабмита

  //const newCardData = addPopup.getInputValues()
  api.addNewCardToServer(inputValues.namePlace, inputValues.link)

    .then((cardDetailsFromDB) => {
      const newCard = creatCard(cardDetailsFromDB);
      section.addNewItem(newCard);
      addPopup.close()
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    })
    .finally(() =>
      addPopup.setDefaultButtonText() //уберем точки загрузки с кнопки
    )
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
  addPopup.open();
  validators.popupFormAdd.disableButton();
}

function openPopupAvatarEdit() {
  popupAvatarEdit.open();
  validators.popupAvatarEdit.disableButton();
}


popupImageZoom.setEventListeners();
profileEditPopup.setEventListeners();
addPopup.setEventListeners();
popupAvatarEdit.setEventListeners();
popupDeleteCard.setEventListeners();

profileButtonEdit.addEventListener("click", openPopupProfileEdit);
profileButtonAdd.addEventListener("click", openPopupAdd);
avatarButtonEdit.addEventListener('click', openPopupAvatarEdit);


