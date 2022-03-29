(function () {
    'use strict';

    console.log(document.querySelector('.menu'));

    const menu = document.querySelector('.block');
    const block = document.querySelector('.menu');
    const ob = new IntersectionObserver(obCallback, {
        root: null, // relative to document viewport
        rootMargin: '0px', // margin around root. Values are similar to css property. Unitless values not allowed
        threshold: 1.0 // visible amount of item shown in relation to root
    });

    function obCallback(payload) {
        console.log(payload[0].boundingClientRect.y);
        if(payload[0].boundingClientRect.y < 100) {
            block.classList.add('visible');
            console.log('a');
        }
        else {
            block.classList.remove('visible');
            console.log('b');

        }
    }

    ob.observe(menu);



})();

