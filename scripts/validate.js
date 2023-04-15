const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_invalid',

}


const setEventListeners = (formToValidity, { inputSelector, submitButtonSelector, inactiveButtonClass, ...rest }) => {
  const formInputs = Array.from(formToValidity.querySelectorAll(inputSelector))
  const formButton = formToValidity.querySelector(submitButtonSelector)

  disableButton(formButton, { inactiveButtonClass })
  formInputs.forEach(input => {
    input.addEventListener('input', () => {
      showErrorIfInvalid(input)
      if (hasInvalidInput(formInputs)) {
        disableButton(formButton, { inactiveButtonClass})

      } else {
        enableButton(formButton, { inactiveButtonClass })

      }
    })
  })
}


const enableValidation = ({ formSelector, ...rest }) => {
  const forms = Array.from(document.querySelectorAll(formSelector))

  forms.forEach(form => {
    // form.addEventListener("submit", function (event) {
    //   event.preventDefault()
    // })
    setEventListeners(form, rest)

  })

}

const showErrorIfInvalid = (input) => {
  if (input.checkValidity()) {   
    hideInputError(input)
  } else {
    showInputError(input)
}
}

const showInputError = (input) => {
  const currentInputErrorContainer = document.querySelector(`#${input.id}-error`);   //тут связываем наш span ошибки с инпутом - c помощью щаблона (input id + -error)
  currentInputErrorContainer.textContent = input.validationMessage;  //тут говорим , что надо добавить текст ошибки 
  input.classList.add('popup__input_type_error');
}

  

const hideInputError = (input) => {
  const currentInputErrorContainer = document.querySelector(`#${input.id}-error`);
  currentInputErrorContainer.textContent = '' // тут функция checkValidity () будет сверять с данными длины из html, можно сделать через цикл for и длину массива
  input.classList.remove('popup__input_type_error');
}

// функция для возможности применения enableButton и disableButton
const hasInvalidInput = (formInputs) => {
  //console.log(formInputs)
  return formInputs.some(item => !item.validity.valid) // проверяем, есть ли какое-то поле, которые отвечает условию !item.validity.valid) ищем хотя бы одно не валидное поле
}


//для того, чтобы кнопку сделать неактивной нужно убрать класс valid, добавить класс invalid и добавить атрибут disabled
const enableButton = (button, { inactiveButtonClass, ...rest }) => {
  button.classList.remove(inactiveButtonClass)

  button.removeAttribute('disabled', true)
}

const disableButton = (button, { inactiveButtonClass, ...rest }) => {
  button.classList.add(inactiveButtonClass)

  button.setAttribute('disabled', true)
}


enableValidation(validationConfig);

