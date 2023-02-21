const profileButtonEdit = document.querySelector(".profile__button-edit");
console.log('редакт кнопка: ', profileButtonEdit);

const popup = document.querySelector(".popup");

function openPopup() {
  popup.classList.remove("popup_hidden")
}

profileButtonEdit.addEventListener("click", openPopup);

const popupCloseButton = popup.querySelector(".popup__close-button");
console.log('закрытия кнопка: ', popupCloseButton);

function closePopup() {
  popup.classList.add("popup_hidden")
}

popupCloseButton.addEventListener("click", closePopup);

/*popup__save-button */
let nameInput = popup.querySelector(".popup__name");
console.log("поле имени: ", nameInput);
let statusInput = popup.querySelector(".popup__status");
console.log("поле статуса: ", statusInput);

const popupSaveButton = popup.querySelector(".popup__save-button");

console.log("сохранение фигни: ", popupSaveButton);

function submitForm(event) {
  event.preventDefault();
  console.log(event);

  let profileName = document.querySelector(".profile__name");
  profileName.textContent = nameInput.value;
  let profileStatus = document.querySelector(".profile__status");
  profileStatus.textContent = statusInput.value;

  closePopup()
}

popupSaveButton.addEventListener("submit", submitForm);
