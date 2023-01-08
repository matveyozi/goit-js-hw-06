const boxes = document.querySelector('#boxes');
const input = document.querySelector('input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');

function createBoxes(amount) {
  const array = []
  for (let i = 0; i < amount; i++) {
    let newBox = `<div 
    style = 'width:${30 + i * 10 + 'px'}; 
    height: ${30 + i * 10 + 'px'};  
    background-color: ${getRandomHexColor()}'></div>`;
    array.push(newBox);
  }
  boxes.innerHTML = array.join('');
}

function destroyBoxes(block) {
  block.innerHTML = ''
}

btnCreate.addEventListener('click', () => createBoxes(input.value));
btnDestroy.addEventListener('click', () => destroyBoxes(boxes));
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



