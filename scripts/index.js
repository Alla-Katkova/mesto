import Card from './Card.js';
import FormValidator from './FormValidator.js';
import Section from './Section.js';
import PopupWithImage from './PopupWithImage.js';
import { initialCards } from '../utils/constants.js'

// селекторы для валидации
const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_invalid',
  inputErrorClass: 'popup__input_type_error'
}
// все формы
const forms = Array.from(document.querySelectorAll(validationConfig.formSelector))

const profileButtonEdit = document.querySelector(".profile__button-edit");
const profileButtonAdd = document.querySelector(".profile__button-add");

const popupProfileEdit = document.querySelector(".popup-edit");

const popupAdd = document.querySelector(".popup-add")

const popupCloseButtonProfileEdit = popupProfileEdit.querySelector(".popup__close-button");
const popupCloseButtonAdd = popupAdd.querySelector(".popup__close-button-add");

const nameInput = popupProfileEdit.querySelector(".popup__input_type_name");
const statusInput = popupProfileEdit.querySelector(".popup__input_type_status");

const popupFormProfileEdit = popupProfileEdit.querySelector(".popup__form");
const profileName = document.querySelector(".profile__name");

const profileStatus = document.querySelector(".profile__status");

const placeNameInput = popupAdd.querySelector(".popup__input_type_place-name");
const photoLinkInput = popupAdd.querySelector(".popup__input_type_photo-link");
const popupFormAdd = popupAdd.querySelector(".popup__form_add")

const popupZoom = document.querySelector('.popup-zoom')
const elements = document.querySelector('.elements')

const popupZoomImages = popupZoom.querySelector('.popup__images-zoom');
const popupZoomCaption = popupZoom.querySelector('.popup__caption-zoom');

const popupList = document.querySelectorAll('.popup')

//const cardTemplate = document.querySelector('#elementTemplate').content.querySelector('.element')



const elementsSelector = '.elements'
const popupProfileSelector = ".popup-edit"
const popupZoomSelector = '.popup-zoom';




//const profilePopup = new Popup(popupProfileSelector);
const popupImageZoom = new PopupWithImage(popupZoomSelector)
popupImageZoom.setEventListeners();


const section = new Section ({
  items: initialCards, //мой массив карточек
  renderer: (cardData) => {
    const card = new Card (cardData, '#elementTemplate', popupImageZoom.open);//в рендере создаем карточку (это колбэк фунция для создания карточки)
    return card.generateCard(); //и возвращаем методом generate card дом элемент карточки со всеми слушателями
  }
}, elementsSelector) //создала константу-селектор для контейнера карточек

section.render()

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



//запихну в popup наследника UserInfo
function openPopupProfileEdit() {
  nameInput.value = profileName.textContent;
  statusInput.value = profileStatus.textContent;


}
// либо удалю, либо запихну в наследника PopupWithForm
function openPopupAdd() {
 // openPopupUniversal(popupAdd);
}

//запихну в popup наследника UserInfo
profileButtonEdit.addEventListener("click", openPopupProfileEdit);
popupCloseButtonProfileEdit.addEventListener("click", function () {
  //closePopupUniversal(popupProfileEdit)
});
//запихну в popup наследника PopupWithForm
profileButtonAdd.addEventListener("click", openPopupAdd);
popupCloseButtonAdd.addEventListener("click", function () {
  //closePopupUniversal(popupAdd)
});

//запихну в popup наследника UserInfo
function submitFormProfileEdit(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileStatus.textContent = statusInput.value;
  //closePopupUniversal(popupProfileEdit)
}

//запихну в popup наследника PopupWithForm
function submitFormAdd(event) {
  event.preventDefault();

  // скорее всего пойдет в constants
  const cardData = {
    name: placeNameInput.value,
    link: photoLinkInput.value
  };

//запихну в popup наследника PopupWithForm
  const newCard = createCard(cardData);
  elements.prepend(newCard);
  //closePopupUniversal(popupAdd);
  resetAddForm();
}

//запихну в popup наследника PopupWithForm
function resetAddForm() {
  popupFormAdd.reset();
  validators[popupFormAdd.getAttribute('name')].disableButton();
}

//запихну в popup наследника UserInfo
popupFormProfileEdit.addEventListener("submit", submitFormProfileEdit);

//запихну в popup наследника PopupWithForm
popupFormAdd.addEventListener("submit", submitFormAdd);


