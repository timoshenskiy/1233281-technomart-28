var VISUALLY_HIDDEN = 'visually-hidden';
var SHOW = 'popup-show';
var ERROR = 'feedback__error';

/* Карта */

var openMapPopupButton = document.querySelector('.company-contacts__map-link');
var bigMapPopup = document.querySelector('.big-map-wrapper');
var closeMapPopupButton = document.querySelector('.big-map__close-btn');

var closeMapPopupButtonClickHandler = function () {
  bigMapPopup.classList.add(VISUALLY_HIDDEN);
  bigMapPopup.classList.remove(SHOW);

  closeMapPopupButton.setAttribute('tabindex', -1);

  openMapPopupButton.focus();
  closeMapPopupButton.removeEventListener('click', closeMapPopupButtonClickHandler)
}

if (openMapPopupButton) {
  openMapPopupButton.addEventListener('click' , function (evt) {
    evt.preventDefault();

    bigMapPopup.classList.remove(VISUALLY_HIDDEN);
    bigMapPopup.classList.add(SHOW);

    closeMapPopupButton.setAttribute('tabindex', 0);
    closeMapPopupButton.addEventListener('click', closeMapPopupButtonClickHandler);
  });
}

/* Обратная связь */

var openFeedbackPopupButton = document.querySelector('.company-contacts__feedback-link');
var feedbackPopup = document.querySelector('.feedback-wrapper');
var feedbackForm = document.querySelector('.feedback__form');
var closeFeedbackPopupButton = document.querySelector('.feedback__close-btn');
var feedbackInputName = document.querySelector('.feedback__input--name');
var feedbackInputEmail = document.querySelector('.feedback__input--email');
var feedbackInputText = document.querySelector('.feedback__textarea');
var feedbackSubmitButton = document.querySelector('.feedback__submit-btn');

var isStorageSupport = true;
var storage = '';

try {
  storage = localStorage.getItem('name-lastname');
} catch (err) {
  isStorageSupport = false;
}

var closeFeedbackPopupButtonClickHandler = function () {
  feedbackPopup.classList.add(VISUALLY_HIDDEN);
  feedbackPopup.classList.remove(SHOW);

  closeFeedbackPopupButton.setAttribute('tabindex', -1);
  feedbackInputName.setAttribute('tabindex', -1);
  feedbackInputEmail.setAttribute('tabindex', -1);
  feedbackInputText.setAttribute('tabindex', -1);
  feedbackSubmitButton.setAttribute('tabindex', -1);

  openFeedbackPopupButton.focus();
  closeFeedbackPopupButton.removeEventListener('click', closeFeedbackPopupButtonClickHandler);
  feedbackSubmitButton.removeEventListener('click', feedbackSubmitButtonClickHandler);
}

var feedbackSubmitButtonClickHandler = function (evt) {
  evt.preventDefault();
  if (feedbackInputName.value && feedbackInputEmail.value && feedbackInputText.value) {
    if (isStorageSupport) {
      localStorage.setItem('name-lastname', feedbackInputName.value);
      localStorage.setItem('email', feedbackInputEmail.value);
    }
    feedbackForm.submit();
  } else {
    feedbackPopup.classList.remove(ERROR);
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    feedbackPopup.classList.add(ERROR);
  }
}

if (openFeedbackPopupButton) {
  openFeedbackPopupButton.addEventListener('click' , function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.remove(VISUALLY_HIDDEN);
    feedbackPopup.classList.add(SHOW);
    if (isStorageSupport) {
      feedbackInputName.value = localStorage.getItem('name-lastname');
      feedbackInputEmail.value = localStorage.getItem('email');
    }

    closeFeedbackPopupButton.setAttribute('tabindex', 0);
    feedbackInputName.setAttribute('tabindex', 0);
    feedbackInputEmail.setAttribute('tabindex', 0);
    feedbackInputText.setAttribute('tabindex', 0);
    feedbackSubmitButton.setAttribute('tabindex', 0);

    feedbackSubmitButton.addEventListener('click', feedbackSubmitButtonClickHandler);
    closeFeedbackPopupButton.addEventListener('click', closeFeedbackPopupButtonClickHandler);

  });
}

/* Корзина */

var catalog = document.querySelector('.product-catalog__list');

var basketPopup = document.querySelector('.basket-notification');
var addToBasketButtons = document.querySelectorAll('.product-catalog__item-link-buy');

var basketContinueButton = document.querySelector('.basket-notification__close-btn');
var basketCloseButton = document.querySelector('.basket-notification__continue-btn');
var basketLinkButton = document.querySelector('.basket-notification__link');

var BasketPopupCloseButtonClickHandler = function () {
  basketPopup.classList.add(VISUALLY_HIDDEN);
  basketPopup.classList.remove(SHOW);

  basketContinueButton.setAttribute('tabindex', -1);
  basketCloseButton.setAttribute('tabindex', -1);
  basketLinkButton.setAttribute('tabindex', -1);

  basketContinueButton.removeEventListener('click' , BasketPopupCloseButtonClickHandler);
  basketCloseButton.removeEventListener('click' , BasketPopupCloseButtonClickHandler);

}

for (var i = 0; i < addToBasketButtons.length; i++) {
  addToBasketButtons[i].addEventListener('click', function (evt) {
    evt.preventDefault();
    basketPopup.classList.remove(VISUALLY_HIDDEN);
    basketPopup.classList.add(SHOW);

    basketContinueButton.setAttribute('tabindex', 0);
    basketCloseButton.setAttribute('tabindex', 0);
    basketLinkButton.setAttribute('tabindex', 0);

    basketLinkButton.focus();

    basketContinueButton.addEventListener('click', BasketPopupCloseButtonClickHandler);
    basketCloseButton.addEventListener('click', BasketPopupCloseButtonClickHandler);

  })
}
