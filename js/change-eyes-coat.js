// 'use strict';
// (function () {

//   var wizardCoat = document.querySelector('.wizard-coat');

//   var wizardEye = document.querySelector('.wizard-eyes');

//   var wizardBall = document.querySelector('.setup-fireball-wrap');

//   var coatColor;

//   var eyesColor;

//   var x;

//   var saveCoatolor = function (color) {
//     coatColor = color;
//   };

//   var saveEyesColor = function (color) {
//     eyesColor = color;
//   };

//   var saveWizards = function

//   var upDateWizards = function () {
//     var sameCoatWizards = wizards.filter(function (it) {
//       return it.coatColor === coatColor;
//     });

//     var sameEyesWizards = wizards.filter(function (it) {
//       return it.eyesColor === eyesColor;
//     });

//     var filteredWizards = sameCoatWizards.concat(sameEyesWizards).concat(wizards);

//     var uniqueWizards = filteredWizards.filter(function (it, i) {
//       return filteredWizards.indexOf(it) === i;
//     })
//     window.render(uniqueWizards);
//   };

//   window.colorize(wizardCoat, window.wizardData.coatColorsList, document.querySelector('input[name = coat-color]'), saveCoatolor, upDateWizards);
//   window.colorize(wizardEye, window.wizardData.eyesColorslist, document.querySelector('input[name = eyes-color]'), saveEyesColor, upDateWizards);
//   window.colorize(wizardBall, window.wizardData.wiazardBallColorList, document.querySelector('input[name = fireball-color]'));

// })();
