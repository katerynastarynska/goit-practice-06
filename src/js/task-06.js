const inputEl = document.getElementById('validation-input');
console.log(inputEl);

inputEl.addEventListener('blur', onInputChange);

function onInputChange() {

    if (inputEl.value.length === 6) {

        inputEl.classList.remove("invalid");
        inputEl.classList.add("valid");
        console.log('added class valid');
    } else {
        inputEl.classList.remove("valid");
        inputEl.classList.add("invalid");
        console.log('added class invalid');
    }
    return inputEl;
}