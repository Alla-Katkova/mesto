//открытие и закрытие поп ап
const profileButtonEdit = document.querySelector(".profile__button-edit");
//console.log('редакт кнопка: ', profileButtonEdit);
const popup = document.querySelector(".popup");

function openPopup() {
  popup.classList.remove("popup_hidden")
  // Информация из профиля пользователя загружается в соответствующие поля
  nameInput.value = profileName.textContent;
  statusInput.value = profileStatus.textContent;
}

const popupCloseButton = popup.querySelector(".popup__close-button");
//console.log('закрытия кнопка: ', popupCloseButton);

function closePopup() {
  popup.classList.add("popup_hidden")
}
profileButtonEdit.addEventListener("click", openPopup);
popupCloseButton.addEventListener("click", closePopup);


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

function submitForm(event) {
  event.preventDefault();
  //console.log(event);
  profileName.textContent = nameInput.value;
  profileStatus.textContent = statusInput.value;
  closePopup()
}

popupForm.addEventListener("submit", submitForm);

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
