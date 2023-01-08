const form = document.querySelector('.login-form');

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
	event.preventDefault();
	const {
		elements: { email, password }
	} = event.currentTarget;
	let result = { email: email.value, password: password.value };
	if (email.value === "" || password.value === "") {
		 alert("Please fill in all the fields!");
	// } else console.log(`Email: ${email.value}, Password: ${password.value}`);
	} else console.log(result)

	
	event.currentTarget.reset();
}