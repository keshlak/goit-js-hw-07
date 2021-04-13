// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputRef = document.querySelector('#validation-input');
const validation = function () {
  if (inputRef.value.length === 0) {
    inputRef.className = '';
  } else if (
    inputRef.value.length >= Number(inputRef.getAttribute('data-length'))
  ) {
    inputRef.className = 'valid';
  } else inputRef.className = 'invalid';
};
inputRef.addEventListener('blur', validation);
