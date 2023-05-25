import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handleConfirmationDelete) {
    super(popupSelector);
    this._handleConfirmationDelete = handleConfirmationDelete;
    this._form = this._popup.querySelector('.popup__form-delete');
    this._submitButton = this._form.querySelector('.popup__save-button'); //для ... в кнопке сохранения
    this._defaultButtonText = this._submitButton.textContent;// изначальная кнопка без ...

  }

  open = ({ card, cardId }) => {   //моя корзина
    super.open();
    this._element = card; //при открытии сздасться в объекте PopupWithConfirmation свойство элемент и туда запишется аругмент element
    this._cardId = cardId
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (event) => {
      event.preventDefault();
      this._setNewButtonText()
      this._handleConfirmationDelete({ card: this._element, cardId: this._cardId })
      //this.close()
    })
  }

  _setNewButtonText() {
    this._submitButton.textContent = `${this._submitButton.textContent}...` // добавляю три точки к кнопкам
  }

  setDefaultButtonText() {
    this._submitButton.textContent = this._defaultButtonText //при сбросе присваиваем кнопке изначальное значение без точек (это содержиться в defaultButton)
  }


}
