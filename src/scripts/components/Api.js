export default class Api {
  constructor(config) {
    this._baseUrl = config.baseUrl
    this._headers = config.headers

  }

  getUserDetailsFromDataBase = () => {
    return fetch(this._baseUrl + "/users/me", { headers: this._headers })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject('Error')
      })
  }


  getInitialCards = () => {
    //console.log() 
    return fetch(this._baseUrl + "/cards", {headers: this._headers})
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

}



