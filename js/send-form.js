'use strict';
(function() {
  var form = document.querySelector('.setup-wizard-form');

  var setup = window.wizardData.setup;

  var sendSuccess = function (response) {
      setup.classList.add('hidden');
  };

  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), sendSuccess, window.backend.errorHandler);
    evt.preventDefault();
  });
})();
