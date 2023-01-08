const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector('#ingredients');

const listItem = ingredients.map(ingridient => `<li class ="item">${ingridient}</li>`).join('');
ingredientsList.innerHTML = listItem;
// ingredients.forEach(item => {
//   const ingredientsItem = document.createElement('li');
//   ingredientsItem.innerHTML = item;
//   ingredientsItem.classList.add('item');
//   ingredientsList.append(ingredientsItem);
// })