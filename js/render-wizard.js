'use strict';

(function () {

  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var similarListElement = document.querySelector('.setup-similar-list');

  var similarBlock = document.querySelector('.setup-similar');

  var playersList = window.generateData;

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

  pushItemInDoc(window.wizardData.wizardNumber);

})();
