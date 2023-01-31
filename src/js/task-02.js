const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById('ingredients');

const makeIngridientsList = (ingredients) => {
  return ingredients.map((ingredient) => {
    const ingredientsItem = document.createElement('li');
    ingredientsItem.textContent = ingredient;
    ingredientsItem.className = ('item');
    return ingredientsItem;
  })
}
const listOfIngredients = makeIngridientsList(ingredients);
ingredientsList.append(...listOfIngredients);
