const form = document.querySelector('form');
const button = form.querySelector('.btn');

const saludo = (event) => {
    event.preventDefault();
    const inputName = form.querySelector('.input-name');
    const inputLastname = form.querySelector('.input-lastname');
    alert(`Hola ${inputName.value} ${inputLastname.value}`);
}

button.addEventListener('click', saludo);


/*
 * Ejercicio 02
 */
const cuadrado = document.getElementById('cuadrado');
const inputColor = document.getElementById('color');

const changeColor = () => {
    cuadrado.style.backgroundColor = inputColor.value;
};
const restoreColor = () => {
    cuadrado.style.backgroundColor = 'yellow';
};

cuadrado.addEventListener('mouseenter', changeColor);
cuadrado.addEventListener('mouseleave', restoreColor);
