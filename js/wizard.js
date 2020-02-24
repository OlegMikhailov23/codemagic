'use strict';

(function () {

  var wizardCoat = document.querySelector('.wizard-coat');

  var wizardEye = document.querySelector('.wizard-eyes');

  var wizardBall = document.querySelector('.setup-fireball-wrap');

  var coatColor;

  var eyesColor;

  var fireballColor;

  var wizards = [];

  var saveCoatolor = function (color) {
    coatColor = color;
  };

  var saveEyesColor = function (color) {
    eyesColor = color;
  };

  var saveFireballColor = function (color) {
    fireballColor = color;
  };

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }

    if (wizard.colorFireball === fireballColor) {
      rank += 1;
    }
    return rank;
  };

  var nameComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var upDateWizards = function () {
    window.render(wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = nameComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  };

  window.colorize(wizardCoat, window.wizardData.coatColorsList, document.querySelector('input[name = coat-color]'), saveCoatolor, window.debounce(upDateWizards));
  window.colorize(wizardEye, window.wizardData.eyesColorslist, document.querySelector('input[name = eyes-color]'), saveEyesColor, window.debounce(upDateWizards));
  window.colorize(wizardBall, window.wizardData.wiazardBallColorList, document.querySelector('input[name = fireball-color]'), saveFireballColor, window.debounce(upDateWizards));

  var successHandler = function (data) {
    wizards = data;
    upDateWizards();
  };

  var URL_LOAD = 'https://js.dump.academy/code-and-magick/data';

  window.backend.load(successHandler, window.backend.errorHandler, URL_LOAD);

})();
