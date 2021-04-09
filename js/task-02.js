const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsListRef = document.querySelector('#ingredients');

const addItems = ingredients.map(item => {
  const ingredientsItem = document.createElement('li');
  ingredientsItem.textContent = item;
  return ingredientsItem;
});

ingredientsListRef.append(...addItems);

// Сделал форИЧем и редьюсом, но не мог понять, как за одну операцию запушить все li...
// const addItems = array => {
//   array.forEach(item => {
//     const ingredientsItem = document.createElement('li'); //creates <li>
//     ingredientsItem.textContent = item; //adds required text to <li>
//     ingredientsList.appendChild(ingredientsItem); //adds <li> to <ul>
//   });
// };

// const addItems = array => {
//   array.reduce( item) => {
//     // const ingredientsItem = document.createElement('li'); //creates <li>
//     ingredientsItemAcc = document.createElement('li');
//     console.log(ingredientsItemAcc);
//     ingredientsItemAcc.textContent = item; //adds required text to <li>
//     return ingredientsList.appendChild(ingredientsItemAcc); //adds <li> to <ul>
//   }, 0);
// };

// addItems(ingredients);
