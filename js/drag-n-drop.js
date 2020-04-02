'use strict';

(function () {

  var Coordinate = function (x, y) {
    this._x = x;
    this._y = y;
  };

  Coordinate.prototype.setX = function (x) {
    this._x = x;
  };

  Coordinate.prototype.setY = function (y) {
    this._y = y;
  };

  window.dragAndDrop = function (evt, el, draggableEl) {
    evt.preventDefault();

    var startCoords = new Coordinate();
    startCoords.setX(evt.clientX);
    startCoords.setY(evt.clientY);
    console.log(startCoords);

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      dragged = true;

      var shift = new Coordinate();
      shift.setX(startCoords._x - moveEvt.clientX);
      shift.setY(startCoords._y - moveEvt.clientY);

      startCoords.setX(moveEvt.clientX);
      startCoords.setY(moveEvt.clientY);

      draggableEl.style.top = (draggableEl.offsetTop - shift._y) + 'px';
      draggableEl.style.left = (draggableEl.offsetLeft - shift._x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      if (dragged) {
        var onClickPreventDefault = function (evt) {
          evt.preventDefault();
          el.removeEventListener('click', onClickPreventDefault);
        };
        el.addEventListener('click', onClickPreventDefault);
      }
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };
})();
