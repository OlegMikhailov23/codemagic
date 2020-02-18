'use strict';
(function () {
  var setup = window.wizardData.setup;

  var setupOpen = document.querySelector('.setup-open');

  var setupClose = setup.querySelector('.setup-close');

  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscpress);
  };

  var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscpress);
    setup.style.left = window.defaultCoords.x;
    setup.style.top = window.defaultCoords.y;
  };

  var onPopupEscpress = function (evt) {
    window.keyboardUtils.isEscEvent(evt, closePopup);
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    window.keyboardUtils.isEnterEvent(evt, openPopup);
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.keyboardUtils.isEnterEvent(evt, closePopup);
  });
})();
