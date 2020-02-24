'use strict';

(function () {
  var setup = window.wizardData.setup;

  var dialogHandler = document.querySelector('.upload');

  var getDialogDefaultCoords = function (el) {
    var computedStyle = getComputedStyle(el);
    var defaultCoords = {
      x: computedStyle.left,
      y: computedStyle.top
    };
    return defaultCoords;
  };

  window.defaultCoords = getDialogDefaultCoords(setup);

  dialogHandler.addEventListener('mousedown', function (evt) {
    window.dragAndDrop(evt, dialogHandler, setup);
  });
})();
