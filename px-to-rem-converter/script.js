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
        if (el.startsWith('.')) el = '0' + el;
        const pxInt = parseInt(el.slice(0, -2));
        const rem = pxInt / 16;
        converted = converted.replace(new RegExp(el, 'gi'), `${rem}rem`);
      });

      return converted;

    }



  });


})();


