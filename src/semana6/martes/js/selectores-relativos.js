const ul = document.querySelector('ul');

ul.firstElementChild.style.background = 'red';
ul.lastElementChild.style.background = 'green';

const ulArray = Array.from(ul.children);
console.log(ulArray);

console.log(ul.children);
console.log(ul.children[0]);
console.log(ul.children[1]);
console.log(ul.nextElementSibling);
console.log(ul.previousElementSibling.previousElementSibling);