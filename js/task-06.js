const input = document.querySelector('#validation-input');
input.addEventListener('blur', (e) => {
	if (e.currentTarget.value.length >= 6) {
		input.classList.add('valid')
		if (input.classList.contains('invalid')) input.classList.remove('invalid')
	} else {
		input.classList.add('invalid');
		input.classList.remove('valid');
	}
})