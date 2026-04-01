const body = document.body;
let curBodyWidth = 100;

window.addEventListener('wheel', (event) => {
  if (!event.shiftKey) return;

  const delta = Math.sign(event.wheelDelta);
  body.style.margin = '0 auto';

  if (delta === 1 && curBodyWidth < 100) {
    curBodyWidth += 5;
  }

  if (delta === -1 && curBodyWidth > 0) {
    curBodyWidth -= 5;
  }

  body.style.width = `${curBodyWidth}%`;
});
