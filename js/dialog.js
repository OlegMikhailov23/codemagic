'use strict';
(function () {
  var setup = window.wizardData.setup;

  var setupOpen = document.querySelector('.setup-open');

  var setupClose = setup.querySelector('.setup-close');

  var dialogHandler = document.querySelector('.upload');

  var getDialogDefaultCoords = function (el) {
    var computedStyle = getComputedStyle(el);
    var defaultCoords = {
      x: computedStyle.left,
      y: computedStyle.top
    };
    return defaultCoords;
  };

  var defaultCoords = getDialogDefaultCoords(setup);

  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscpress);
  };

  var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscpress);
    setup.style.left = defaultCoords.x;
    setup.style.top = defaultCoords.y;
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

  dialogHandler.addEventListener('mousedown', function (evt) {
    window.dragAndDrop(evt, dialogHandler, setup);
  });
})();
