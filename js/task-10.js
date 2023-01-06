const boxes = document.querySelector('#boxes');
const input = document.querySelector('input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const body = document.querySelector('body');
boxes.remove();
btnCreate.addEventListener('click', () => createBoxes(input.value));
btnDestroy.addEventListener('click', () => destroyBoxes(boxes));
function createBoxes(amount) {
  body.append(boxes);
  for (let i = 0; i < amount; i++) {
    let newBox = document.createElement('div');
    newBox.style.width = 30 + i*10 + 'px';
    newBox.style.height = 30 + i * 10 + 'px';
    newBox.style.backgroundColor = getRandomHexColor();
    boxes.append(newBox);
  }
}
function destroyBoxes(block) {
  block.remove();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
