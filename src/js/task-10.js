function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('input');
console.dir(inputEl);
const createBtn = document.querySelector('button[data-create]');
console.log(createBtn);
const destroyBtn = document.querySelector('button[data-destroy]');
console.log(destroyBtn);
const boxesEl = document.getElementById('boxes');
console.log(boxesEl);


createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {

  amount = inputEl.value;

  let width = 30;
  let height = 30;

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${width}px`;
    box.style.height = `${height}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxesEl.append(box);

    width += 10;
    height += 10;
  }
}

function destroyBoxes() {
  boxesEl.innerHTML = '';
}