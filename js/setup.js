'use strict';

var playersNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var playersSurname = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var coatColorsList = ['rgb(101, 137, 164)', ' rgb(241, 43, 107) ', 'rgb(146, 100, 161)', 'rgb(56, 159, 117) ', ' rgb(215, 210, 55) ', 'rgb(0, 0, 0)'];

var eyesColorslist = ['black', 'red', 'blue', 'yellow', 'green'];

var wizardKeys = ['name', 'coatColor', 'eyesColor'];

var wizardNames = [];

var playersList = [];

var wizardData = [wizardNames, coatColorsList, eyesColorslist];

var wizardNumber = 104;

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var similarListElement = document.querySelector('.setup-similar-list');

var similarBlock = document.querySelector('.setup-similar');

var openDialog = function () {
  var userDialog = document.querySelector('.setup');
  userDialog.classList.remove('hidden');
};
// Создаем рандомный массив полных имен магов
var getFullName = function (names, surnames) {
  for (var i = 0; i < names.length; i++) {
    var fullName = '';
    fullName = names[Math.floor(Math.random() * names.length)] + ' ' + surnames[Math.floor(Math.random() * surnames.length)];
    wizardNames.push(fullName);
  }
  return wizardNames;
};
// Получаем массив объектов с данными каждого мага
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
};
// Создаем DOM элементы и отрисовываем их в HTML-документе
var pushItemInDoc = function (plyersNumber) {
  for (var i = 0; i < plyersNumber; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = playersList[i].name;
    wizardElement.querySelector('.wizard-coat').style.fill = playersList[i].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = playersList[i].eyesColor;
    similarListElement.appendChild(wizardElement);
  }
  similarBlock.classList.remove('hidden');
};

// Общая функция для запуска всего, что выше.
var renderWizards = function (arrKeys, arrData, names, surnames) {
  openDialog();
  wizardNames = getFullName(names, surnames);
  getWizardTeam(arrKeys, arrData);
  pushItemInDoc(wizardNumber);
};

renderWizards(wizardKeys, wizardData, playersNames, playersSurname);
