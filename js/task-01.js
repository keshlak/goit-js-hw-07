const list = document.querySelector('#categories');
console.log(`В списке ${list.childElementCount} категории.`); // Shows category count

const listItems = document.querySelectorAll('.item');
listItems.forEach(item => {
  console.log(`Категория: ${item.firstElementChild.textContent}`); //Shows category title
  console.log(`Количество элементов: ${item.querySelectorAll('li').length}`); //Shows list items count
});
