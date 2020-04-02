'use strict';

(function () {
  var playersNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

  var playersSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

  var coatColorsList = window.wizardData.coatColorsList;

  var eyesColorslist = window.wizardData.eyesColorslist;

  var wizardKeys = ['name', 'coatColor', 'eyesColor'];

  var wizardNames = [];

  var playersList = [];

  var wizardData = [wizardNames, coatColorsList, eyesColorslist];

  var wizardNumber = window.wizardData.wizardNumber;

  var getFullName = function (names, surnames) {
    for (var i = 0; i < names.length; i++) {
      var fullName = '';
      fullName = names[Math.floor(Math.random() * names.length)] + ' ' + surnames[Math.floor(Math.random() * surnames.length)];
      wizardNames.push(fullName);
    }
    return wizardNames;
  };

  wizardNames = getFullName(playersNames, playersSurnames);

  var getWizardTeam = function (arrKeys, arrData) {
    for (var i = 0; i < wizardNumber; i++) {
      var someObj = {};
      for (var j = 0; j < arrKeys.length; j++) {
        someObj[arrKeys[j]] = arrData[j][
          [Math.floor(Math.random() * arrData[j].length)]
        ];
      }
      playersList.push(someObj);
    }
    return playersList;
  };

  window.generateData = getWizardTeam(wizardKeys, wizardData);
})();
