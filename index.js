import Card from './scripts/Card.js';
import FormValidator from './scripts/FormValidator.js';
import Section from './scripts/Section.js';
import PopupWithImage from './scripts/PopupWithImage.js';
import { initialCards } from './utils/constants.js'
import UserInfo from './scripts/UserInfo.js';
import PopupWithForm from './scripts/PopupWithForm.js';

// селекторы для валидации
const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_invalid',
  inputErrorClass: 'popup__input_type_error'
}

const forms = Array.from(document.querySelectorAll(validationConfig.formSelector)) // все формы
const profileButtonEdit = document.querySelector(".profile__button-edit");
const profileButtonAdd = document.querySelector(".profile__button-add");
// const popupProfileEdit = document.querySelector(".popup-edit")
// const popupAdd = document.querySelector(".popup-add")
// const popupCloseButtonProfileEdit = popupProfileEdit.querySelector(".popup__close-button");
// const popupCloseButtonAdd = popupAdd.querySelector(".popup__close-button-add");
// const nameInput = popupProfileEdit.querySelector(".popup__input_type_name");
// const statusInput = popupProfileEdit.querySelector(".popup__input_type_status");
// const popupFormProfileEdit = popupProfileEdit.querySelector(".popup__form");
// const profileName = document.querySelector(".profile__name");
// const profileStatus = document.querySelector(".profile__status");
// const placeNameInput = popupAdd.querySelector(".popup__input_type_place-name");
// const photoLinkInput = popupAdd.querySelector(".popup__input_type_photo-link");
// const popupFormAdd = popupAdd.querySelector(".popup__form_add")
// const elements = document.querySelector('.elements')


const userInfoConfig = {
  nameSelector: ".profile__name",
  statusSelector: ".profile__status"
}

const elementsSelector = '.elements'
const popupZoomSelector = '.popup-zoom';
const popupAddSelector = ".popup-add";
const popupProfileEditSelector = ".popup-edit"


const popupImageZoom = new PopupWithImage(popupZoomSelector)
popupImageZoom.setEventListeners();

const userInfo = new UserInfo(userInfoConfig);

const profileEditPopup = new PopupWithForm(popupProfileEditSelector, (event) => {
  event.preventDefault();
  userInfo.setUserInfo(profileEditPopup.getInputValues())
  profileEditPopup.close()
})

profileEditPopup.setEventListeners()

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
})
addPopup.setEventListeners()

// const validators = {
//   form1: new FormValidator(validationConfig, forms[0]),
//   popupFormAdd: new FormValidator(validationConfig, forms[1])
// };

// validators.form1.enableValidation()
// validators.form2.enableValidation()

// const nameOfTheFormOne = forms[1].getAttribute('name') //popupFormAdd
// validators[forms[1].getAttribute('name')]  === validators.popupFormAdd
// forms.forEach((formElement) => {
//   const form = new FormValidator(validationConfig, formElement);
//   form.enableValidation();
// });

const validators = {};
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


profileButtonEdit.addEventListener("click", openPopupProfileEdit);
// popupCloseButtonProfileEdit.addEventListener("click", function () {
//   //closePopupUniversal(popupProfileEdit)
// });


profileButtonAdd.addEventListener("click", openPopupAdd);
// popupCloseButtonAdd.addEventListener("click", function () {
//   addPopup.close()
// });

// function resetAddForm() {
//   popupAddSelector.reset();
//   validators[popupAddSelector.getAttribute('name')].disableButton();
// }


// function submitFormProfileEdit(event) {
// //   event.preventDefault();
// //   // profileName.textContent = nameInput.value;
// //   // profileStatus.textContent = statusInput.value;
// //   //profileEditPopup.getInputValues(userInfo.setUserInfo())
// //   profileEditPopup.close()
// event.preventDefault();
// userInfo.setUserInfo(profileEditPopup.getInputValues())
// profileEditPopup.close()
//  }
//  popupFormProfileEdit.addEventListener("submit", submitFormProfileEdit);

// function submitFormAdd(event) {
//   event.preventDefault();


//   const cardData = {
//     name: placeNameInput.value,
//     link: photoLinkInput.value
//   };

//   const newCard = createCard(cardData);
//   elements.prepend(newCard);
//   //closePopupUniversal(popupAdd);
//   resetAddForm();
// }





// popupAddSelector.addEventListener("submit", submitFormAdd);


