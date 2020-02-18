'use strict';
(function () {
  var makeXhr = function (onLoad, onError) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      xhr.addEventListener('load', function () {
        if (xhr.status === 200) {
          onLoad(xhr.response);
        } else {
          onError('Статус ответа ' + xhr.status + ' ' + xhr.statusText);
        }
      });
      xhr.addEventListener('error', function () {
        onError('Произошла ошибка соединения!');
      });
      xhr.addEventListener('timeout', function () {
        onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
      });
      return xhr;
    };
  window.backend = {
    load: function (onLoad, onError, url) {
      var xhr = makeXhr(onLoad, onError);
      xhr.open('GET', url);
      xhr.timeout = 10000;
      xhr.send();
    },

    save: function (data, onLoad, onError, url) {
      var xhr = makeXhr(onLoad, onError);
      xhr.open('POST', url);
      xhr.send(data);
    },

    errorHandler: function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: #cccccc;';
    node.style.position = 'absolute';
    node.style.left = '30%';
    node.style.right = 'auto';
    node.style.fontSize = '30px';
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  }
  };

})();
