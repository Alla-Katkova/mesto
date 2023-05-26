export default class Card {
  constructor(data, templateSelector, handleCardClick, handleOpenConfirmationPopup, likeToggle) {  //handleDeleteButtonClick
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._owner = data.owner;
    this._cardId = data._id;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleOpenConfirmationPopup = handleOpenConfirmationPopup;
    // this._handleLikeChange = handleLikeChange ;
    this._likeToggle = likeToggle;
   // console.log(this._likes)
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
    this._likeButton = this._element.querySelector(".element__like-button");

    this._setEventListeners();

    //добавим данные
    this._elementPhoto.src = this._link;
    this._elementPhoto.alt = this._name; //можно поставить написать this._elementPhoto.setAttribute('alt', this._name) равнозначно
    const elementCaption = this._element.querySelector(".element__caption");
    elementCaption.textContent = this._name;
    //лайки
    this._likesCounter = this._element.querySelector(".element__counter");
    this._likesCounter.textContent = this._likes.length // вводим счетчик лайков и заставляем его их считать (возвращается массив- количество лайков =длине массива)
    this._checkLikesStatus(currentUserId)
    // урны
    this._putTrashBin(currentUserId)
    //Вернём элемент наружу
    return this._element;
  }

  //лайки переключатель
  likeToggle(likes) {  
    this._likeButton.classList.toggle("element__like-button_active");
    this._likesCounter.textContent = likes.length
    console.log(likes.length)
  }

  _handleLikeToggle = () => {
    this._likeToggle(this._likeButton, this._cardId)
  }

  // проверка лайков, их почернение и счетчик количества
  _checkLikesStatus(currentUserId) {
    this._likes.forEach((infoAboutLike) => {
      if (currentUserId === infoAboutLike._id) {
        this._likeButton.classList.add("element__like-button_active")
        return
      }
    })

  }



  //постановка урн
  _putTrashBin(currentUserId) {
    if (currentUserId !== this._owner._id) {
      this._element.querySelector('.element__delete-button').style.display = 'none';
    }
  }

  // функция открытия подтверждения удаления при нажатии на урну
  _handleDeleteButtonClick() {
    this._handleOpenConfirmationPopup({ card: this, cardId: this._cardId })
  }
  //открытие зум картинки
  _handleOpenPopupFullImage() {
    this._handleCardClick(this._name, this._link)
  }
  //удаление карточки
  removeCard() {
    this._element.remove();
  }

  _setEventListeners() {
    const likeButton = this._element.querySelector(".element__like-button");
    likeButton.addEventListener("click", () => {
      this._handleLikeToggle()
    });

    const deleteButton = this._element.querySelector(".element__delete-button");
    deleteButton.addEventListener("click", () => {
      this._handleDeleteButtonClick()
    });

    this._elementPhoto.addEventListener("click", () => {
      this._handleOpenPopupFullImage();
    });
  }
}
