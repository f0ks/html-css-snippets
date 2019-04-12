(function () {
  'use strict';

  /*


  */


  console.log();

  window.addEventListener('load', function () {
    const text = document.querySelector('.ellipsis');
    const showMore = document.querySelector('.show-more');
    showMore.onclick = function () {
      text.classList.remove("ellipsis");

    };

  })


})();

console.log('--------------------------------------------------------------');
