const sortableTable = (id) => {
  const headers = document.querySelectorAll(`#${id} th`);

  headers.forEach((el) => {
    el.addEventListener('click', (e) => {
      console.log(e.target);
    });
    el.style.cursor = 'pointer';
  });
};

sortableTable('my-table');
