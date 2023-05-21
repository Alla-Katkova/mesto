export default class Api {
  constructor(config) {
    //console.log(config)
    this._baseUrl = config.baseUrl
    this._headers = {
      headers: config.headers
    }

  }

  // getInitialCards() {
  //   // ...
  // }

  getUserDetailsFromDataBase = () => {
    return fetch(this._baseUrl + "/users/me", this._headers)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject('Error')
      })
  }


}



