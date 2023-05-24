import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImageZoom = this._popup.querySelector('.popup__images-zoom');
    this._popupCaptionZoom = this._popup.querySelector('.popup__caption-zoom');
    
  }

  open = (place, link) => {
    this._popupImageZoom.setAttribute("src", link);
    this._popupImageZoom.setAttribute("alt", place);
    this._popupCaptionZoom.textContent = place;
    super.open()
  }
}