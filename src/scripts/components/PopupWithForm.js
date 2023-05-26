import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitFormFunction) {
    super(popupSelector);
    this._submitFormFunction = submitFormFunction;
    this._form = this._popup.querySelector('.popup__form');
    this._allInput = this._form.querySelectorAll('.popup__input');
    this._submitButton = this._form.querySelector('.popup__save-button'); //для ... в кнопке сохранения
    this._defaultButtonText = this._submitButton.textContent;// изначальная кнопка без ...
  }

  getInputValues() {
    this._values = {};
    this._allInput.forEach(input => {
      this._values[input.name] = input.value
    })
    //console.log(this._values)
    return this._values
    // const data = Object.fromEntries(new FormData(this._form));
    // return data

  }

  setInputValues(newDataUser) {
    this._allInput.forEach(input => {
      input.value = newDataUser[input.name];
    })
  }

  close() {
    super.close();
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', this._submitFormFunction)
  }

  setNewButtonText() {
    this._submitButton.textContent = `${this._submitButton.textContent}...` // добавляю три точки к кнопкам
  }

  setDefaultButtonText() {
    this._submitButton.textContent = this._defaultButtonText //при сбросе присваиваем кнопке изначальное значение без точек (это содержиться в defaultButton)
  }

}