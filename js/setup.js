'use strict';

var playersNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var playersSurname = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var coatColorsList = ['rgb(101, 137, 164)', ' rgb(241, 43, 107) ', 'rgb(146, 100, 161)', 'rgb(56, 159, 117) ', ' rgb(215, 210, 55) ', 'rgb(0, 0, 0)'];

var eyesColorslist = ['black', 'red', 'blue', 'yellow', 'green'];

var wiazardBallColorList = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var wizardKeys = ['name', 'coatColor', 'eyesColor'];

var wizardNames = [];

var playersList = [];

var wizardData = [wizardNames, coatColorsList, eyesColorslist];

var wizardNumber = 4;

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var similarListElement = document.querySelector('.setup-similar-list');

var similarBlock = document.querySelector('.setup-similar');

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
  // openDialog(setup);
  wizardNames = getFullName(names, surnames);
  getWizardTeam(arrKeys, arrData);
  pushItemInDoc(wizardNumber);
};

renderWizards(wizardKeys, wizardData, playersNames, playersSurname);

// Создаем сценарий взаимодействий пользователя со страницей
//
// 1) Нажатие на элемент .setup-open удаляет у блока '.setup' класс 'hidden';
// 2) Нажатие на элемент .setup-close добавляет блоку '.setup' класс 'hidden';
// 3) При нажатии на мантию .wizard-coat мантия рандомно меняет цвет;

var ESC_KEYCODE = 27;

var ENTER_KEYCODE = 13;

var setup = document.querySelector('.setup');

var setupOpen = document.querySelector('.setup-open');

var setupClose = setup.querySelector('.setup-close');

var wizardCoat = setup.querySelector('.wizard-coat');

var wizardEye = setup.querySelector('.wizard-eyes');

var wizardBall = setup.querySelector('.setup-fireball-wrap');

var cheangeCoat = function () {
  wizardCoat.style.fill = coatColorsList[Math.floor(Math.random() * coatColorsList.length)];
};

var cheangeEye = function () {
  wizardEye.style.fill = eyesColorslist[Math.floor(Math.random() * eyesColorslist.length)];
};

var cheangeFireball = function () {
  wizardBall.style.backgroundColor = wiazardBallColorList[Math.floor(Math.random() * wiazardBallColorList.length)];
};

var onPopupEscpress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscpress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscpress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

wizardCoat.addEventListener('click', function () {
  cheangeCoat();
  setup.querySelector('input[name = coat-color]').value = wizardCoat.style.fill;
});

wizardEye.addEventListener('click', function () {
  cheangeEye();
  setup.querySelector('input[name = eyes-color]').value = wizardEye.style.fill;
});

wizardBall.addEventListener('click', function () {
  cheangeFireball();
  setup.querySelector('input[name = fireball-color]').value = wizardBall.style.backgroundColor;
});
