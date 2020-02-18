'use strict';

(function () {

  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var similarListElement = document.querySelector('.setup-similar-list');

  var similarBlock = document.querySelector('.setup-similar');

  var wizardCoat = document.querySelector('.wizard-coat');

  var wizardEye = document.querySelector('.wizard-eyes');

  var wizardBall = document.querySelector('.setup-fireball-wrap');

  var coatColor;

  var eyesColor;

  var wizards = [];

  var saveCoatolor = function (color) {
    coatColor = color;
  };

  var saveEyesColor = function (color) {
    eyesColor = color;
  };

  var upDateWizards = function () {
    var sameCoatAndEyesWizards = wizards.filter(function (it) {
      return it.colorCoat === coatColor && it.colorEyes === eyesColor;
    });

    var sameCoatWizards = wizards.filter(function (it) {
      return it.colorCoat === coatColor;
    });

    var sameEyesWizards = wizards.filter(function (it) {
      return it.colorEyes === eyesColor;
    });

    var filteredWizards = sameCoatAndEyesWizards;
    filteredWizards = filteredWizards.concat(sameCoatWizards);
    filteredWizards = filteredWizards.concat(sameEyesWizards);
    filteredWizards = filteredWizards.concat(wizards);
    sameCoatWizards.concat(sameEyesWizards).concat(wizards);
    var uniqueWizards = filteredWizards.filter(function (it, i) {
      return filteredWizards.indexOf(it) === i;
    })
    window.render(uniqueWizards);
  };

  window.colorize(wizardCoat, window.wizardData.coatColorsList, document.querySelector('input[name = coat-color]'), saveCoatolor, upDateWizards);
  window.colorize(wizardEye, window.wizardData.eyesColorslist, document.querySelector('input[name = eyes-color]'), saveEyesColor, upDateWizards);
  window.colorize(wizardBall, window.wizardData.wiazardBallColorList, document.querySelector('input[name = fireball-color]'));

  var successHandler = function (data) {
    wizards = data;
    upDateWizards();
  };

  var URL_LOAD = 'https://js.dump.academy/code-and-magick/data';

  window.backend.load(successHandler, window.backend.errorHandler, URL_LOAD);

})();
