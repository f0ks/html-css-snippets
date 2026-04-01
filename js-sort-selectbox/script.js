const selectBox = document.getElementById('selectbox');
const sortButton = document.getElementById('sort');
const selectedValue = document.getElementById('value');

sortButton.addEventListener('click', () => {
  const options = [...selectBox.querySelectorAll('option')];
  const sorted = options.map((opt) => opt.innerHTML).sort();

  options.forEach((opt, i) => {
    opt.innerHTML = sorted[i];
  });
});

selectBox.addEventListener('change', (ev) => {
  selectedValue.innerHTML = ev.target.value;
});
