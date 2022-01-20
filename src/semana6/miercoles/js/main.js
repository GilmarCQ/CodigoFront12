const button = document.querySelector('.js_button');

function toggleMenu () {
    const menu = this.querySelector('.menu');
    if (menu.style.display == 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

button.onclick = toggleMenu;

const button2 = document.querySelector('.js_button_2');

button2.onmouseover = toggleMenu;
button2.onmouseout = toggleMenu;