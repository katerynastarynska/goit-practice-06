const inputEl = document.getElementById('font-size-control');

const textEl = document.getElementById('text');

inputEl.addEventListener('input', onInputChange);

function onInputChange(e) {
    textEl.style.fontSize = `${e.target.value}px`; 
}