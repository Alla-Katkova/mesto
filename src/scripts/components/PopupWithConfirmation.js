import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handleConfirmationDelete) {
    super(popupSelector);
    // this._button = document.querySelector(".popup__close-button-confirmation-delete");
    this._handleConfirmationDelete = handleConfirmationDelete;
    this._form = this._popup.querySelector('.popup__form-delete');

  }

  open = (element) => {   //моя корзина
    this._element = element; //при открытии сздасться в объекте PopupWithConfirmation свойство элемент и туда запишется аругмент element
    super.open();
  }

  setEventListeners() {

    super.setEventListeners();
    this._form.addEventListener('submit', (event) => {
      event.preventDefault();
      this._handleConfirmationDelete(this._element)
    })
  }

}
