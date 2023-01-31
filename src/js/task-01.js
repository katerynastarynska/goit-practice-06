const categoriesEl = document.getElementById('categories');
console.log(`Number of categories: ${categoriesEl.children.length}`);

const listItems = document.querySelectorAll('.item');

listItems.forEach((item) => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
})

