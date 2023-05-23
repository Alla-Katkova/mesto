export default class UserInfo {
  constructor(userInfoConfig) {
    this._userName = document.querySelector(userInfoConfig.nameSelector);
    this._userStatus = document.querySelector(userInfoConfig.statusSelector);
    this._userAvatar = document.querySelector(userInfoConfig.avatarSelector);

  }

  getUserInfo() {
    return {profilename: this._userName.textContent, 
            profilestatus: this._userStatus.textContent,
            }
  }
  
  // setUserInfo(newDataUser) {
  //   this._userName.textContent = newDataUser.profilename
  //   this._userStatus.textContent = newDataUser.profilestatus
  // }

  setUserInfoDB(userDetails) { // по сути это showUserInfoFromDB
    this._userName.textContent = userDetails.name
    this._userStatus.textContent = userDetails.about
    this._userAvatar.src = userDetails.avatar
  }  

  setCurrentUserId(idFromDB) {
    this._id = idFromDB;
  }

  getCurrentUserId() {
    return this._id;
  }

}