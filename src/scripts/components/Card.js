export default class Card {
  constructor(data, templateSelector, handleCardClick, handleOpenConfirmationPopup) {  //handleDeleteButtonClick
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._owner = data.owner; //this._ownerId = data.owner._id; 
    this._cardId = data._id;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    //this._handleDeleteButtonClick = handleDeleteButtonClick
    this._handleOpenConfirmationPopup = handleOpenConfirmationPopup;
  
  }

  _getTemplate() {
    const cardTemplate = document
      .querySelector(this._templateSelector)
      .content.querySelector(".element");
    const newElement = cardTemplate.cloneNode(true);

    return newElement;
  }

  generateCard(currentUserId) {

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
    const likesCounter = this._element.querySelector(".element__counter");
    likesCounter.textContent = this._likes.length

    if (currentUserId !== this._owner._id) {
      this._element.querySelector('.element__delete-button').style.display = 'none';
    }
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
    // this._element.remove();
    this._handleOpenConfirmationPopup({ card: this, cardId: this._cardId })
  }

  _handleOpenPopupFullImage() {
    this._handleCardClick(this._name, this._link)
  }

  removeCard() {
    this._element.remove();
    //this.element = null
  }
}
