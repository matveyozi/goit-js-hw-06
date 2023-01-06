let counterValue = 0;
const value = document.querySelector('#value');
const btnMinus = document.querySelector('button[data-action="decrement"]');
const btnPlus = document.querySelector('button[data-action="increment"]');
btnPlus.addEventListener('click', (e) => {
	e.preventDefault();
	counterValue++;
	value.textContent = counterValue;
})
btnMinus.addEventListener('click', (e) => {
	e.preventDefault();
	counterValue--;
	value.textContent = counterValue;
})