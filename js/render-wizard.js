'use strict';

(function () {

  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var similarListElement = document.querySelector('.setup-similar-list');

  var similarBlock = document.querySelector('.setup-similar');

  // var playersList = window.generateData;

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    return wizardElement;
  };

  var successHandler = function (wizards) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < window.wizardData.wizardNumber; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
    similarBlock.classList.remove('hidden');
  };

  window.backend.load(successHandler, window.backend.errorHandler);
  // var pushItemInDoc = function (plyersNumber) {
  //   for (var i = 0; i < plyersNumber; i++) {
  //     var wizardElement = similarWizardTemplate.cloneNode(true);
  //     wizardElement.querySelector('.setup-similar-label').textContent = playersList[i].name;
  //     wizardElement.querySelector('.wizard-coat').style.fill = playersList[i].coatColor;
  //     wizardElement.querySelector('.wizard-eyes').style.fill = playersList[i].eyesColor;
  //     similarListElement.appendChild(wizardElement);
  //   }
  //   similarBlock.classList.remove('hidden');
  // };

  // pushItemInDoc(window.wizardData.wizardNumber);

})();
