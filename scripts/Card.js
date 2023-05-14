export default class Card {
  constructor(data, templateSelector, handleOpenPopupCallback) {
    this._name = data.place;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleOpenPopupCallback = handleOpenPopupCallback
  }

  _getTemplate() {
    const cardTemplate = document
      .querySelector(this._templateSelector)
      .content.querySelector(".element");
    const newElement = cardTemplate.cloneNode(true);

    return newElement;
  }

  generateCard() {
    // Запишем разметку в приватное поле _element.
    // Так у других элементов появится доступ к ней.
    this._element = this._getTemplate(); // тут создаю элемент
   
    this._elementPhoto = this._element.querySelector(".element__photo");

    this._setEventListeners();

    //добавим данные
    this._elementPhoto.src = this._link;
    this._elementPhoto.alt = this._name; //можно поставить написать this._elementPhoto.setAttribute('alt', this._name) равнозначно
    const elementCaption = this._element.querySelector(".element__caption");
    elementCaption.textContent = this._name;

    //Вернём элемент наружу
    return this._element;
  }

  _setEventListeners() {
    const likeButton = this._element.querySelector(".element__like-button");
    likeButton.addEventListener("click", this._handleLikeToggle);

    const deleteButton = this._element.querySelector(".element__delete-button");
    deleteButton.addEventListener("click", () => {
      this._handleDeleteButtonClick()
    });

    this._elementPhoto.addEventListener("click", () => {
      this._handleOpenPopupFullImage();
    });
  }

  _handleLikeToggle(event) {
    event.target.classList.toggle("element__like-button_active");
  }

  _handleDeleteButtonClick() {
    //const button = event.target;
    //this._element = button.closest(".element");
    this._element.remove();
  
  }

  _handleOpenPopupFullImage() {
    this._handleOpenPopupCallback(this._name, this._link)
  }
}
