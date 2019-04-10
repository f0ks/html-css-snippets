(function () {
  'use strict';

  window.addEventListener('load', function () {

    const convertButton = document.getElementById('convert');
    
    convertButton.onclick = function (e) {
      const text = document.getElementById('source').value;
      document.getElementById('result').value = convert(text);
    };


    function convert(source) {
      const pxMatches = source.match(/(\d*\.?\d+)\s?(px)/igm);
      let converted = source;

      pxMatches.forEach(function (el, i) {
        const pxInt = parseInt(el.slice(0, -2));
        converted = converted.replace(new RegExp(el, 'gi'), `${pxInt / 16}rem`);
      });

      return converted;

    }



  });


})();


