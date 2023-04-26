export default class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
  }
  _getTemplate() {
    const cardTemplate = document.querySelector(this._templateSelector).content.querySelector('.element')
    const newElement = cardTemplate.cloneNode(true);

    return newElement
  }

  generateCard() {
    // Запишем разметку в приватное поле _element. 
    // Так у других элементов появится доступ к ней.
    this._element = this._getTemplate();

    this._setEventListeners();

    const elementPhoto = this._element.querySelector('.element__photo');

    //добавим данные 
    elementPhoto.src = this._link;
    elementPhoto.setAttribute('alt', this._name);//можно поставить точку .alt равнозначно
    const elementCaption = this._element.querySelector('.element__caption');
    elementCaption.textContent = this._name;

    //Вернём элемент наружу
    return this._element;
  }

  _setEventListeners() {
    const likeButton = this._element.querySelector('.element__like-button');
    likeButton.addEventListener('click', this._handleLikeToggle)

    const deleteButton = this._element.querySelector('.element__delete-button');
    deleteButton.addEventListener('click', this._handleDeleteButtonClick);

    const elementPhoto = this._element.querySelector('.element__photo');
    elementPhoto.addEventListener('click', () => { 
      this._handleOpenPopupFullImage()
    });
  }

  _handleLikeToggle(event) {
    event.target.classList.toggle('element__like-button_active')
  }

  _handleDeleteButtonClick(event) {
    const button = event.target;
    const elementToDelete = button.closest('.element');
    elementToDelete.remove();
  }

  _handleOpenPopupFullImage() {
    popupZoomImages.setAttribute('src', this._link);
    popupZoomImages.setAttribute('alt', this._name);
    popupZoomCaption.textContent = this._name;
    openPopupUniversal(popupZoom);
  }
}