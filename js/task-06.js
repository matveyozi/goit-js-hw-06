const input = document.querySelector('#validation-input');
// console.log(input.dataset.length)
input.addEventListener('blur', (e) => {
	// console.log(e.currentTarget.value.length == input.dataset.length)
	if (e.currentTarget.value.length == input.dataset.length) {
		input.classList.add('valid')
		if (input.classList.contains('invalid')) input.classList.remove('invalid')
	} else {
		input.classList.add('invalid');
		input.classList.remove('valid');
	}
})