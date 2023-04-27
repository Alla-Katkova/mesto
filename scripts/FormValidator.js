export default class FormValidator {
  constructor(data, formToValidate) {
    this._formSelector = data.formSelector;
    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._formToValidate = formToValidate;
  }

  _setEventListeners = () => {
    const formInputs = Array.from(
      this._formToValidate.querySelectorAll(this._inputSelector)
    );
    const formButton = this._formToValidate.querySelector(
      this._submitButtonSelector
    );
    this._disableButton(formButton);
    formInputs.forEach((input) => {
      input.addEventListener("input", () => {
        this._showErrorIfInvalid(input);
        if (this._hasInvalidInput(formInputs)) {
          this._disableButton(formButton);
        } else {
          this._enableButton(formButton);
        }
      });
    });
  };

  enableValidation = () => {
    this._setEventListeners();
  };

  _showErrorIfInvalid = (input) => {
    if (input.checkValidity()) {
      this._hideInputError(input, this._inputErrorClass);
    } else {
      this._showInputError(input, this._inputErrorClass);
    }
  };
  _showInputError = (input) => {
    const currentInputErrorContainer = document.querySelector(
      `#${input.id}-error`
    ); //тут связываем наш span ошибки с инпутом - c помощью щаблона (input id + -error)
    currentInputErrorContainer.textContent = input.validationMessage; //тут говорим , что надо добавить текст ошибки
    input.classList.add(this._inputErrorClass);
  };
  _hideInputError = (input) => {
    const currentInputErrorContainer = document.querySelector(
      `#${input.id}-error`
    );
    currentInputErrorContainer.textContent = ""; // тут функция checkValidity () будет сверять с данными длины из html, можно сделать через цикл for и длину массива
    input.classList.remove(this._inputErrorClass);
  };

  // функция для возможности применения enableButton и disableButton
  _hasInvalidInput = (formInputs) => {
    return formInputs.some((item) => !item.validity.valid); // проверяем, есть ли какое-то поле, которые отвечает условию !item.validity.valid) ищем хотя бы одно не валидное поле
  };

  //для того, чтобы кнопку сделать неактивной нужно убрать класс valid, добавить класс invalid и добавить атрибут disabled
  _enableButton = (button) => {
    button.classList.remove(this._inactiveButtonClass);
    button.removeAttribute("disabled", true);
  };

  _disableButton = (button) => {
    button.classList.add(this._inactiveButtonClass);
    button.setAttribute("disabled", true);
  };
}


