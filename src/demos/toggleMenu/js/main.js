const toggleButton = document.querySelector('button');
const menu = document.querySelector('.menu');

const toggleMenu = () => {
    console.log('Menu Button');
    menu.classList.toggle('is-active');
    toggleButton.classList.toggle('active');
}

toggleButton.addEventListener('click', toggleMenu);