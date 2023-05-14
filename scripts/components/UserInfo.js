export default class UserInfo {
  constructor(userInfoConfig) {
    this._userName = document.querySelector(userInfoConfig.nameSelector);
    this._userStatus = document.querySelector(userInfoConfig.statusSelector);
  }

  getUserInfo() {
    return {profilename: this._userName.textContent, profilestatus: this._userStatus.textContent}
  }
  
  setUserInfo(newDataUser) {
    this._userName.textContent = newDataUser.profilename
    this._userStatus.textContent = newDataUser.profilestatus
  }

}