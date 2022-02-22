let loaderWrapper = document.querySelector('.loader-wrapper');
      let overflows = document.querySelector('.overflows');

      window.addEventListener('load', function () {
        let body = document.querySelector('body');
        loaderWrapper.parentElement.removeChild(loaderWrapper);
        body.classList.add('overflows');
      });