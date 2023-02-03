function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
const colorChangeBtn = document.querySelector('.change-color');
const colorEl = document.querySelector('.color');

colorChangeBtn.addEventListener('click', onBtnChangeClick);

function onBtnChangeClick() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorEl.textContent = bodyEl.style.backgroundColor;
}