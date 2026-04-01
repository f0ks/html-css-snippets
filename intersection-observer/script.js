const menu = document.querySelector('.block');
const block = document.querySelector('.menu');

const obCallback = (entries) => {
  const { y } = entries[0].boundingClientRect;
  console.log(y);

  if (y < 100) {
    block.classList.add('visible');
    console.log('a');
  } else {
    block.classList.remove('visible');
    console.log('b');
  }
};

const ob = new IntersectionObserver(obCallback, {
  root: null,
  rootMargin: '0px',
  threshold: 1.0,
});

ob.observe(menu);
