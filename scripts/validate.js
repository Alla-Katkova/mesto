const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_invalid',
  activeButtonClass: 'popup__save-button_valid'
}


const setEventListeners = (formToValidity, { inputSelector, submitButtonSelector, inactiveButtonClass, activeButtonClass, ...rest }) => {
  const formInputs = Array.from(formToValidity.querySelectorAll(inputSelector))
  const formButton = formToValidity.querySelector(submitButtonSelector)

  disableButton(formButton, { inactiveButtonClass, activeButtonClass })
  formInputs.forEach(input => {
    input.addEventListener('input', () => {
      showErrorIfInvalid(input)
      if (hasInvalidInput(formInputs)) {
        disableButton(formButton, { inactiveButtonClass, activeButtonClass })

      } else {
        enableButton(formButton, { inactiveButtonClass, activeButtonClass })

      }
    })
  })
}


const enableValidation = ({ formSelector, ...rest }) => {
  const forms = Array.from(document.querySelectorAll(formSelector))

  forms.forEach(form => {
    form.addEventListener("submit", function (event) {
      event.preventDefault()
    })
    setEventListeners(form, rest)

  })

}

const showErrorIfInvalid = (input) => {
  const currentInputErrorContainer = document.querySelector(`#${input.id}-error`) //тут связываем наш span ошибки с инпутом - c помощью щаблона (input id + -error)

  if (input.checkValidity()) {   // тут функция checkValidity () будет сверять с данными длины из html, можно сделать через цикл for и длину массива
    currentInputErrorContainer.textContent = ''
  } else {
    currentInputErrorContainer.textContent = input.validationMessage //тут говорим , что надо добавить текст ошибки 
  }
}

// функция для возможности применения enableButton и disableButton
const hasInvalidInput = (formInputs) => {
  //console.log(formInputs)
  return formInputs.some(item => !item.validity.valid) // проверяем, есть ли какое-то поле, которые отвечает условию !item.validity.valid) ищем хотя бы одно не валидное поле
}


//для того, чтобы кнопку сделать неактивной нужно убрать класс valid, добавить класс invalid и добавить атрибут disabled
const enableButton = (button, { inactiveButtonClass, activeButtonClass, ...rest }) => {
  button.classList.remove(inactiveButtonClass)
  button.classList.add(activeButtonClass)
  button.removeAttribute('disabled', true)
}

const disableButton = (button, { inactiveButtonClass, activeButtonClass, ...rest }) => {
  button.classList.add(inactiveButtonClass)
  button.classList.remove(activeButtonClass)
  button.setAttribute('disabled', true)
}


enableValidation(validationConfig);