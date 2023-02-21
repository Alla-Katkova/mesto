const profileButtonEdit = document.querySelector(".profile__button-edit");
console.log('редакт кнопка: ', profileButtonEdit);

const popup = document.querySelector(".popup");

function openPopup () {
  popup.classList.remove("popup_hidden") 
}

profileButtonEdit.addEventListener("click", openPopup);

const popupCloseButton = popup.querySelector(".popup__close-button");
console.log('закрытия кнопка: ', popupCloseButton);

function closePopup () {
  popup.classList.add("popup_hidden")

}

popupCloseButton.addEventListener("click", closePopup);

