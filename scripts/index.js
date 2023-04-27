import Card from './Card.js';
import FormValidator from './FormValidator.js';


const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_invalid',
  inputErrorClass: 'popup__input_type_error'
}

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

function createCard(cardData) {
  const card = new Card(cardData, '#elementTemplate', handleOpenPopup);
  const cardElement = card.generateCard();
  return cardElement;
}

initialCards.forEach((cardData) => {
  const newCard = createCard(cardData);
  elements.append(newCard);
});



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



function closePopupByEscape(event) {
  if (event.key === "Escape") {
    const openedPopup = document.querySelector('.popup_opened')
    closePopupUniversal(openedPopup)
  }
}

function openPopupUniversal(popupElement) {
  popupElement.classList.add("popup_opened");
  document.addEventListener('keydown', closePopupByEscape);
}

function openPopupProfileEdit() {
  nameInput.value = profileName.textContent;
  statusInput.value = profileStatus.textContent;
  openPopupUniversal(popupProfileEdit);
}

function openPopupAdd() {
  openPopupUniversal(popupAdd);
}

function closePopupUniversal(element) {
  element.classList.remove("popup_opened");
  document.removeEventListener('keydown', closePopupByEscape);

}
//закрытие на овелей
popupList.forEach(function (popupItem) {
  popupItem.addEventListener('click', function (event) {
    if (event.target === event.currentTarget) {
      closePopupUniversal(popupItem);
    }
  })
})

profileButtonEdit.addEventListener("click", openPopupProfileEdit);
popupCloseButtonProfileEdit.addEventListener("click", function () {
  closePopupUniversal(popupProfileEdit)
});
profileButtonAdd.addEventListener("click", openPopupAdd);
popupCloseButtonAdd.addEventListener("click", function () {
  closePopupUniversal(popupAdd)
});


function submitFormProfileEdit(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileStatus.textContent = statusInput.value;
  closePopupUniversal(popupProfileEdit)
}



function submitFormAdd(event) {
  event.preventDefault();

  const cardData = {
    name: placeNameInput.value,
    link: photoLinkInput.value
  };


  const newCard = createCard(cardData);
  elements.prepend(newCard);
  closePopupUniversal(popupAdd);
  resetAddForm();
}


function resetAddForm() {
  
  popupFormAdd.reset();
  validators[popupFormAdd.getAttribute('name')].disableButton();

}

function handleOpenPopup(name, link) {
  popupZoomImages.setAttribute("src", link);
  popupZoomImages.setAttribute("alt", name);
  popupZoomCaption.textContent = name;
  openPopupUniversal(popupZoom);
}


popupFormProfileEdit.addEventListener("submit", submitFormProfileEdit);
popupFormAdd.addEventListener("submit", submitFormAdd);


const popupCloseButtonZoom = popupZoom.querySelector('.popup__close-button-zoom');
popupCloseButtonZoom.addEventListener("click", function () {
  closePopupUniversal(popupZoom);
  popupZoomImages.setAttribute('src', '');
  popupZoomImages.setAttribute('alt', '');
  popupZoomCaption.textContent = '';
});
