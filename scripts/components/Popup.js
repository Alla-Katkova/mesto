export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);//ищем попап (благодаря селектору в индексе мы подставим нужный нам)
    this._popupCloseButton = this._popup.querySelector('.popup__close-button')
  }

  _handleEscClose = (event) => {
    if (event.key === "Escape") {
      this.close()
    }
  }

  _handleOverlayClose = (event) => {
    if (event.target === event.currentTarget) {
      this.close()
    }
  }

  _handleButtonClose = () => {
    this.close()
  }

  open() {
    this._popup.classList.add("popup_opened");
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener('keydown', this._handleEscClose);
  }


  setEventListeners() {
    this._popupCloseButton.addEventListener('click', this._handleButtonClose);
    this._popup.addEventListener('click', this._handleOverlayClose)
  }
}