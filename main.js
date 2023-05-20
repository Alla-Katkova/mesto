(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var n=function(){function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.place,this._link=e.link,this._templateSelector=n,this._handleCardClick=r}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._elementPhoto=this._element.querySelector(".element__photo"),this._setEventListeners(),this._elementPhoto.src=this._link,this._elementPhoto.alt=this._name,this._element.querySelector(".element__caption").textContent=this._name,this._element}},{key:"_setEventListeners",value:function(){var t=this;this._element.querySelector(".element__like-button").addEventListener("click",this._handleLikeToggle),this._element.querySelector(".element__delete-button").addEventListener("click",(function(){t._handleDeleteButtonClick()})),this._elementPhoto.addEventListener("click",(function(){t._handleOpenPopupFullImage()}))}},{key:"_handleLikeToggle",value:function(t){t.target.classList.toggle("element__like-button_active")}},{key:"_handleDeleteButtonClick",value:function(){this._element.remove()}},{key:"_handleOpenPopupFullImage",value:function(){this._handleCardClick(this._name,this._link)}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,l(r.key),r)}}function i(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function u(t,e,n){return(e=l(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t){var e=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===r(e)?e:String(e)}var c=i((function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,"_setEventListeners",(function(){r.disableButton(),r._formInputs.forEach((function(t){t.addEventListener("input",(function(){r._showErrorIfInvalid(t),r._hasInvalidInput(r._formInputs)?r.disableButton():r._enableButton()}))}))})),u(this,"enableValidation",(function(){r._setEventListeners()})),u(this,"_showErrorIfInvalid",(function(t){t.checkValidity()?r._hideInputError(t,r._inputErrorClass):r._showInputError(t,r._inputErrorClass)})),u(this,"_showInputError",(function(t){document.querySelector("#".concat(t.id,"-error")).textContent=t.validationMessage,t.classList.add(r._inputErrorClass)})),u(this,"_hideInputError",(function(t){document.querySelector("#".concat(t.id,"-error")).textContent="",t.classList.remove(r._inputErrorClass)})),u(this,"_hasInvalidInput",(function(){return r._formInputs.some((function(t){return!t.validity.valid}))})),u(this,"_enableButton",(function(){r._formButton.classList.remove(r._inactiveButtonClass),r._formButton.removeAttribute("disabled",!0)})),u(this,"disableButton",(function(){r._formButton.classList.add(r._inactiveButtonClass),r._formButton.setAttribute("disabled",!0)})),this._formSelector=e.formSelector,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._formToValidate=n,this._formButton=n.querySelector(e.submitButtonSelector),this._formInputs=Array.from(n.querySelectorAll(e.inputSelector))}));function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==a(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===a(o)?o:String(o)),r)}var o}var p=function(){function t(e,n){var r=e.items,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._arrayCards=r,this._renderer=o,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"render",value:function(){var t=this;this._arrayCards.forEach((function(e){t.addItem(t._renderer(e))}))}},{key:"addNewItem",value:function(t){this._container.prepend(t)}},{key:"addItem",value:function(t){this._container.append(t)}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,b(r.key),r)}}function m(t,e,n){return(e=b(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function b(t){var e=function(t,e){if("object"!==f(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===f(e)?e:String(e)}var v=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,"_handleEscClose",(function(t){"Escape"===t.key&&n.close()})),m(this,"_handleOverlayClose",(function(t){t.target===t.currentTarget&&n.close()})),m(this,"_handleButtonClose",(function(){n.close()})),this._popup=document.querySelector(e),this._popupCloseButton=this._popup.querySelector(".popup__close-button")}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){this._popupCloseButton.addEventListener("click",this._handleButtonClose),this._popup.addEventListener("click",this._handleOverlayClose)}}])&&y(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function h(t,e){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},h(t,e)}function _(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=g(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},S.apply(this,arguments)}function g(t){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},g(t)}function w(t){var e=function(t,e){if("object"!==d(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===d(e)?e:String(e)}var E=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&h(t,e)}(i,t);var e,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=g(n);if(r){var o=g(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===d(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _(t)}(this,t)});function i(t){var e,n,r,u,l;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),r=_(n=o.call(this,t)),l=function(t,r){n._popupImageZoom.setAttribute("src",r),n._popupImageZoom.setAttribute("alt",t),n._popupCaptionZoom.textContent=t,S((e=_(n),g(i.prototype)),"open",e).call(e)},(u=w(u="open"))in r?Object.defineProperty(r,u,{value:l,enumerable:!0,configurable:!0,writable:!0}):r[u]=l,n._popupImageZoom=n._popup.querySelector(".popup__images-zoom"),n._popupCaptionZoom=n._popup.querySelector(".popup__caption-zoom"),n}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(v);function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function j(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==k(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==k(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===k(o)?o:String(o)),r)}var o}var O=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userName=document.querySelector(e.nameSelector),this._userStatus=document.querySelector(e.statusSelector)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{profilename:this._userName.textContent,profilestatus:this._userStatus.textContent}}},{key:"setUserInfo",value:function(t){this._userName.textContent=t.profilename,this._userStatus.textContent=t.profilestatus}}])&&j(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}function C(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==P(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==P(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===P(o)?o:String(o)),r)}var o}function I(){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=L(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},I.apply(this,arguments)}function B(t,e){return B=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},B(t,e)}function L(t){return L=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},L(t)}var T=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&B(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=L(r);if(o){var n=L(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===P(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._submitFormFunction=e,n._form=n._popup.querySelector(".popup__form"),n._allInput=n._form.querySelectorAll(".popup__input"),n}return e=u,(n=[{key:"getInputValues",value:function(){var t=this;return this._values={},this._allInput.forEach((function(e){t._values[e.name]=e.value})),this._values}},{key:"setInputValues",value:function(t){this._allInput.forEach((function(e){e.value=t[e.name]}))}},{key:"close",value:function(){I(L(u.prototype),"close",this).call(this),this._form.reset()}},{key:"setEventListeners",value:function(){I(L(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._submitFormFunction)}}])&&C(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(v),q=document.querySelector(".profile__button-edit"),x=document.querySelector(".profile__button-add"),R={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_invalid",inputErrorClass:"popup__input_type_error"},A=Array.from(document.querySelectorAll(R.formSelector)),V={},D=new E(".popup-zoom"),F=new O({nameSelector:".profile__name",statusSelector:".profile__status"}),N=new T(".popup-edit",(function(t){t.preventDefault(),F.setUserInfo(N.getInputValues()),N.close()}));function Z(t){return new n(t,"#elementTemplate",D.open).generateCard()}var z=new p({items:[{place:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{place:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{place:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{place:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{place:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{place:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:Z},".elements");z.render();var U=new T(".popup-add",(function(t){t.preventDefault();var e=Z(U.getInputValues());z.addNewItem(e),U.close()}));A.forEach((function(t){var e=new c(R,t);e.enableValidation(),V[t.getAttribute("name")]=e})),D.setEventListeners(),N.setEventListeners(),U.setEventListeners(),q.addEventListener("click",(function(){N.setInputValues(F.getUserInfo()),N.open()})),x.addEventListener("click",(function(){U.open(),V.popupFormAdd.disableButton()}))})();