const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// Сделал форИЧем и редьюсом, но не могу понять, как за одну операцию запушить все li...
const ingredientsList = document.querySelector('#ingredients');

// const addItems = array => {
//   array.forEach(item => {
//     const ingredientsItem = document.createElement('li'); //creates <li>
//     ingredientsItem.textContent = item; //adds required text to <li>
//     ingredientsList.appendChild(ingredientsItem); //adds <li> to <ul>
//   });
// };

const addItems = array => {
  array.reduce((ingredientsItemAcc, item) => {
    // const ingredientsItem = document.createElement('li'); //creates <li>
    ingredientsItemAcc = document.createElement('li');
    ingredientsItemAcc.textContent = item; //adds required text to <li>
    return ingredientsList.appendChild(ingredientsItemAcc); //adds <li> to <ul>
  }, 0);
};

addItems(ingredients);
