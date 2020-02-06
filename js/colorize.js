'use strict';

(function () {
  var getRandomColor = function (colors) {
    return colors[Math.floor(colors.length * Math.random())];
  };

  var rgbToHex = function (rgb) {
    rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);

    return (rgb && rgb.length === 4) ? '#' +
      ('0' + parseInt(rgb[1], 10).toString(16)).slice(-2) +
      ('0' + parseInt(rgb[2], 10).toString(16)).slice(-2) +
      ('0' + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
  };

  window.colorize = function (el, colors, input) {
    el.addEventListener('click', function () {
      var color = getRandomColor(colors);
      if (el.tagName.toLowerCase() === 'div') {
        el.style.backgroundColor = color;
        input.value = rgbToHex(el.style.backgroundColor);
      } else {
        el.style.fill = color;
        input.value = color;
      }
    });
  };
})();
