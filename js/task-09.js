const btn = document.querySelector('.change-color');
const outputColor = document.querySelector('.color');
const body = document.querySelector('body');
btn.addEventListener('click', () => {
  const bgc = getRandomHexColor();
  outputColor.textContent = bgc;
  body.style.backgroundColor = bgc;
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
