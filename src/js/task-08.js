const formEl = document.querySelector(".login-form");

formEl.addEventListener('submit', onFormSubmit)

function onFormSubmit(evt) {
    evt.preventDefault();

    const formElements = evt.currentTarget.elements;

    const email = formElements.email.value;
    const password = formElements.password.value;

    if (email === "" || password === "") {
        alert("Please fill all the fields!")
    }

    const formData = {
        email, 
        password,
    }

    console.log(formData);
    formEl.reset();
}