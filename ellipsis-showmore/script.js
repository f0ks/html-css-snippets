const text = document.querySelector('.ellipsis');
const showMore = document.querySelector('.show-more');

showMore.addEventListener('click', () => {
  text.classList.remove('ellipsis');
});
