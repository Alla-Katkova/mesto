import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitFormFunction) {
    super(popupSelector);
    this._submitFormFunction = submitFormFunction;
    this._form = this._popup.querySelector('.popup__form');
    this._allInput = this._form.querySelectorAll('.popup__input')
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

}