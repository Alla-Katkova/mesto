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


const profileButtonEdit = document.querySelector(".profile__button-edit");
const profileButtonAdd = document.querySelector(".profile__button-add");

const popupProfileEdit = document.querySelector(".popup");
const popupAdd = document.querySelector(".popup-add")

const popupCloseButtonProfileEdit = popupProfileEdit.querySelector(".popup__close-button");
const popupCloseButtonAdd = popupAdd.querySelector(".popup__close-button-add");



const nameInput = popupProfileEdit.querySelector(".popup__input_type_name");
//console.log("поле имени: ", nameInput);
const statusInput = popupProfileEdit.querySelector(".popup__input_type_status");
//console.log("поле статуса: ", statusInput);
const popupFormProfileEdit = popupProfileEdit.querySelector(".popup__form");
const profileName = document.querySelector(".profile__name");
//console.log("профиль имя " , profileName);
const profileStatus = document.querySelector(".profile__status");
//console.log("профиль статус " , profileStatus);

const placeNameInput = popupAdd.querySelector(".popup__input_type_place-name");
const photoLinkInput = popupAdd.querySelector(".popup__input_type_photo-link");
const popupFormAdd = popupAdd.querySelector(".popup__form_add")

const popupZoom = document.querySelector('.popup-zoom')
const elements = document.querySelector('.elements')

const popupZoomImages = popupZoom.querySelector('.popup__images-zoom');
const popupZoomCaption = popupZoom.querySelector('.popup__caption-zoom');

const popupList = document.querySelectorAll('.popup')
//console.log(popupList);


initialCards.forEach(function (cardData) {
  const newElement = createCard(cardData);

  elements.append(newElement);
});


function openPopupUniversal(element) {
  element.classList.remove("popup_hidden");
  document.addEventListener('keydown', function (event) {
    if (event.key === "Escape") {
      element.classList.add('popup_hidden')
    }
  })
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
  element.classList.add("popup_hidden");
}

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
  //console.log(event);
  profileName.textContent = nameInput.value;
  profileStatus.textContent = statusInput.value;
  closePopupUniversal(popupProfileEdit)
}

function handleOpenPopupFullImage(data) {
  openPopupUniversal(popupZoom);
  popupZoomImages.setAttribute('src', data.link);
  popupZoomImages.setAttribute('alt', data.name);
  popupZoomCaption.textContent = data.name;
}


function createCard(cardData) {
  const newElement = document.querySelector('#elementTemplate').content.querySelector('.element').cloneNode(true);
  const elementPhoto = newElement.querySelector('.element__photo');
  elementPhoto.setAttribute('src', cardData.link);
  elementPhoto.setAttribute('alt', cardData.name);
  const elementCaption = newElement.querySelector('.element__caption');
  elementCaption.textContent = cardData.name;

  const deleteButton = newElement.querySelector('.element__delete-button');
  deleteButton.addEventListener('click', handleDeleteButtonClick);

  const likeButton = newElement.querySelector('.element__like-button');
  likeButton.addEventListener('click', function (event) {
    event.target.classList.toggle('element__like-button_active')
  })

  elementPhoto.addEventListener('click', function () {
    handleOpenPopupFullImage(cardData)
  });

  return newElement;
}


function submitFormAdd(event) {
  event.preventDefault();

  const cardData = {
    name: placeNameInput.value,
    link: photoLinkInput.value
  };

  const newElement = createCard(cardData);
  elements.prepend(newElement);
  closePopupUniversal(popupAdd)

  popupFormAdd.reset();

  resetAddForm()
}

function resetAddForm() {
  const saveButtonFormAdd = popupFormAdd.querySelector('.popup__save-button_add')
  popupFormAdd.reset();
  disableButton(saveButtonFormAdd,
    {
      inactiveButtonClass: validationConfig.inactiveButtonClass,
      activeButtonClass: validationConfig.activeButtonClass
    }
  )
}

popupFormProfileEdit.addEventListener("submit", submitFormProfileEdit);
popupFormAdd.addEventListener("submit", submitFormAdd);


function handleDeleteButtonClick(event) {
  const button = event.target;
  const elementToDelete = button.closest('.element');
  elementToDelete.remove();
}

const popupCloseButtonZoom = popupZoom.querySelector('.popup__close-button-zoom');
popupCloseButtonZoom.addEventListener("click", function () {
  closePopupUniversal(popupZoom);
  popupZoom.reset();
});









