export default class Api {
  constructor(config) {
    this._baseUrl = config.baseUrl;
    this._headers = config.headers;
    //this._authorization = config.headers.authorization;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  getUserDetailsFromDataBase = () => {
    return fetch(this._baseUrl + "/users/me", { headers: this._headers }) //headers: {authorization: this._authorization}
      .then(this._checkResponse)
  }


  getInitialCards = () => {
    //console.log() 
    return fetch(this._baseUrl + "/cards", { headers: this._headers })
      .then(this._checkResponse)
  }

  getDataForInitialPageRendering = () => {
    return Promise.all([this.getUserDetailsFromDataBase(), this.getInitialCards()])
  }

  editUserInfoInDb = (nameFromForm, aboutFromForm) => {
    return fetch(this._baseUrl + "/users/me", {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: nameFromForm,
        about: aboutFromForm
      })
    })
      .then(this._checkResponse)

  }

  addNewCardToServer = (nameNewCard, linkNewCard) => {
    return fetch(this._baseUrl + "/cards", {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: nameNewCard,
        link: linkNewCard
      })
    })
      .then(this._checkResponse)
  }

  deleteCardFromDB = (id) => {
    return fetch(this._baseUrl + `/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    })
      .then(this._checkResponse)
  }

  editAvaratInDB = (linkToAvatar) => {
    return fetch(this._baseUrl + "/users/me/avatar", {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: linkToAvatar
        //avatar: data.avatar
      })
    })
      .then(this._checkResponse)
  }








}



