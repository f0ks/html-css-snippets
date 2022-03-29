(function () {
  'use strict';

  let isMenuScrolledUp = false;
  let isSticky = false;
  let oldScroll = window.scrollY;
  let isScrollingUp = null;

  function elementsOverlap(el1, el2) {
    const domRect1 = el1.getBoundingClientRect();
    const domRect2 = el2.getBoundingClientRect();

    return !(
      domRect1.top > domRect2.bottom ||
      domRect1.right < domRect2.left ||
      domRect1.bottom < domRect2.top ||
      domRect1.left > domRect2.right
    );
  }

  function getShift(el1, el2) {
    const sh = Math.ceil(el1.getBoundingClientRect().top - el2.getBoundingClientRect().height);
    return sh <= -100 ? -100 : sh;
    //return sh;
  }

  const menu = document.querySelector('.menu');
  const after = document.querySelector('.after');


  if (elementsOverlap(menu, after)) {
    menu.style.marginTop = `${getShift(after, menu)}px`;
  }


  /*    if (elementsOverlap(menu, after)) {
          menu.style.marginTop = `${getShift(after, menu)}px`;
      }*/


  const handleScroll = () => {
    console.log('is Overlaping', elementsOverlap(menu, after));

    isScrollingUp = oldScroll > window.scrollY;

    console.log('isScrollingUp', isScrollingUp);
    console.log(window.scrollY);

    // if (isMenuScrolledUp) return;
    oldScroll = window.scrollY;

    const isInTransition =
      parseInt(getComputedStyle(menu).marginTop, 10) < 0 /*&& elementsOverlap(menu, after)*/;
    const shift = getShift(after, menu);

    //console.log('onscroll is overlap', elementsOverlap(menu, after));


    if (elementsOverlap(menu, after)) {

      if (isSticky && !isScrollingUp) {
        console.log('going down on sticky');

        isSticky = false;

        menu.classList.remove('reveal');
        menu.classList.remove('sticky');

/*        setTimeout(() => {
          menu.classList.remove('sticky');


        }, 300);*/

        return;
      }

      menu.style.marginTop = `${shift}px`;


      /*      menu.classList.remove('reveal');

            setTimeout(() => {
              menu.classList.remove('sticky');

            }, 300)*/
    }

    if (isInTransition && !isSticky) {
      console.log('isInTransition');
      menu.style.marginTop = shift < 0 ? `${shift}px` : '0px';
      if (shift === -100) {
        isSticky = true;
        menu.classList.add('sticky');

        setTimeout(() => {
          menu.classList.add('reveal');


        }, 0)
      }

    } else {
      console.log('not in transition');
    }


  }

  window.addEventListener('scroll', handleScroll);

/*
  const observer = new window.IntersectionObserver(([entry]) => {
    //console.log('observer triggered.');
    //console.log(entry.boundingClientRect.top)
    if (entry.isIntersecting) {
      //console.log('visible')
      return
    }
    //console.log('not visible');


    isMenuScrolledUp = true;


    menu.classList.add('sticky');

    setTimeout(() => {
      menu.classList.add('reveal');


    }, 100)


    if (entry.boundingClientRect.top > 0) {
      console.log("BELOW") // do things if below
    } else {
      console.log("ABOVE") // do things if above
    }


  }, {
    root: null,
    threshold: 0,
  })

  observer.observe(menu);
*/



})();

