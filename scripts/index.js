//открытие и закрытие поп ап
const profileButtonEdit = document.querySelector(".profile__button-edit");
const profileButtonAdd = document.querySelector(".profile__button-add");
//console.log('добавления кнопка: ', profileButtonAdd);


//console.log('редакт кнопка: ', profileButtonEdit);
const popup = document.querySelector(".popup");
const popupAdd = document.querySelector(".popup-add")

const popupCloseButton = popup.querySelector(".popup__close-button");
const popupCloseButtonAdd = popupAdd.querySelector(".popup__close-button-add");
//console.log('закрытия кнопка: ', popupCloseButtonAdd);
//console.log('закр кнопка: ', popupCloseButton);

/*popup__save-button  кнопка сохранения*/
let nameInput = popup.querySelector(".popup__input_type_name");
//console.log("поле имени: ", nameInput);
let statusInput = popup.querySelector(".popup__input_type_status");
//console.log("поле статуса: ", statusInput);
let popupForm = popup.querySelector(".popup__form");
let profileName = document.querySelector(".profile__name");
//console.log("профиль имя " , profileName);
let profileStatus = document.querySelector(".profile__status");
//console.log("профиль статус " , profileStatus);


let placeNameInput = popupAdd.querySelector(".popup__input_type_place-name");
let photoLinkInput = popupAdd.querySelector(".popup__input_type_photo-link");
let popupFormAdd = popupAdd.querySelector(".popup__form_add")
//const popupSaveButtonAdd = popupAdd.querySelector(".popup__save-button_add");


function openPopup() {
  popup.classList.remove("popup_hidden")
  // Информация из профиля пользователя загружается в соответствующие поля
  nameInput.value = profileName.textContent;
  statusInput.value = profileStatus.textContent;
}


function openPopupAdd() {
  popupAdd.classList.remove("popup_hidden")
}
//function closePopupAdd() {
//popupAdd.classList.add("popup_hidden")
//}


//function closePopup() {
//popup.classList.add("popup_hidden")
//}

function closePopupUniversal(element) {
  element.classList.add("popup_hidden");
}

profileButtonEdit.addEventListener("click", openPopup);
popupCloseButton.addEventListener("click", function () {
  closePopupUniversal(popup)
});
profileButtonAdd.addEventListener("click", openPopupAdd);
popupCloseButtonAdd.addEventListener("click", function () {
  closePopupUniversal(popupAdd)
});


function submitForm(event) {
  event.preventDefault();
  //console.log(event);
  profileName.textContent = nameInput.value;
  profileStatus.textContent = statusInput.value;
  closePopupUniversal(popup)
}


function submitFormAdd(event) {
  event.preventDefault();

  const newElement = document.querySelector('#elementTemplate').content.cloneNode(true);
  const elementPhoto = newElement.querySelector('.element__photo');
  elementPhoto.setAttribute('src', photoLinkInput.value);
  const elementCaption = newElement.querySelector('.element__caption');
  elementCaption.textContent = placeNameInput.value;

  const deleteButton = newElement.querySelector('.element__delete-button');
  deleteButton.addEventListener('click', handleDeleteButtonClick);

  const likeButton = newElement.querySelector('.element__like-button');
  likeButton.addEventListener('click', function (event) {
    event.target.classList.toggle('element__like-button_active');
  });

const newLinkFromInput = photoLinkInput.value;
const newNameFromInput = placeNameInput.value

  elementPhoto.addEventListener('click', function() {
    popupZoom.classList.toggle('popup_hidden');
    const popupZoomImages = popupZoom.querySelector('.popup__images-zoom');
    popupZoomImages.setAttribute('src', newLinkFromInput);
    const popupZoomCaption = popupZoom.querySelector('.popup__caption-zoom');
    popupZoomCaption.textContent = newNameFromInput;
  });


  elements.prepend(newElement);

  placeNameInput.value = "";
  photoLinkInput.value = "";
  closePopupUniversal(popupAdd)
}

popupForm.addEventListener("submit", submitForm);
popupFormAdd.addEventListener("submit", submitFormAdd);



//При загрузке на странице 6 карточек, которые добавит JavaScript
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

const popupZoom = document.querySelector('.popup-zoom')
const elements = document.querySelector('.elements')
initialCards.forEach(function (element) {
  const newElement = document.querySelector('#elementTemplate').content.cloneNode(true);
  const elementPhoto = newElement.querySelector('.element__photo');
  elementPhoto.setAttribute('src', element.link);
  const elementCaption = newElement.querySelector('.element__caption');
  elementCaption.textContent = element.name;

  const deleteButton = newElement.querySelector('.element__delete-button');
  deleteButton.addEventListener('click', handleDeleteButtonClick);

  const likeButton = newElement.querySelector('.element__like-button');
  likeButton.addEventListener('click', function (event) {
    event.target.classList.toggle('element__like-button_active');
  })

  elementPhoto.addEventListener('click', function () {
    popupZoom.classList.toggle('popup_hidden');
    const popupZoomImages = popupZoom.querySelector('.popup__images-zoom');
    popupZoomImages.setAttribute('src', element.link);
    const popupZoomCaption = popupZoom.querySelector('.popup__caption-zoom');
    popupZoomCaption.textContent = element.name;
  });

  elements.append(newElement);
})

function handleDeleteButtonClick(event) {
  const button = event.target;
  const elementToDelete = button.closest('.element');
  elementToDelete.remove();
}

const popupCloseButtonZoom = popupZoom.querySelector('.popup__close-button-zoom');
popupCloseButtonZoom.addEventListener("click", function () {
  closePopupUniversal(popupZoom)
});


