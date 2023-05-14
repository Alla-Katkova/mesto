import Card from './scripts/components/Card.js';
import FormValidator from './scripts/components/FormValidator.js';
import Section from './scripts/components/Section.js';
import PopupWithImage from './scripts/components/PopupWithImage.js';
import { initialCards } from './scripts/utils/constants.js'
import UserInfo from './scripts/components/UserInfo.js';
import PopupWithForm from './scripts/components/PopupWithForm.js';

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
profileButtonAdd.addEventListener("click", openPopupAdd);



