
const counterValueEl = document.getElementById('value');

let counterValue = Number(counterValueEl.textContent);

const decrementBtn = document.querySelector('button[data-action=decrement]');

const incrementBtn = document.querySelector('button[data-action=increment]');

decrementBtn.addEventListener('click', onDecrementBtn);

function onDecrementBtn() {
    counterValueEl.textContent = counterValue -= 1;
}

incrementBtn.addEventListener('click', onIncrementBtn);

function onIncrementBtn() {
    counterValueEl.textContent = counterValue += 1;
}