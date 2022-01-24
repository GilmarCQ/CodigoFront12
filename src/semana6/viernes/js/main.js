/**
 * CSSOM 
 * */

const button = document.querySelector("button");
const body = document.querySelector("body");
function ejemploUno() {
    button.onclick = function () {
        console.log(window.getComputedStyle(body).backgroundColor);
        console.log('body.style.backgroundColor', body.style.backgroundColor);
        console.log('body.style', body.style);

        if (body.style.backgroundColor == 'yellow') {
            body.style.backgroundColor = 'red';
        } else {
            body.style.backgroundColor = 'yellow';
        }
    }
}

function ejemploDos() {
    button.onclick = function() {
        console.log(body.classList.contains('bgYellow'));
        if (body.classList.contains('bgYellow')) {
            body.classList.add('bgRed');
            body.classList.remove('bgYellow');
        } else {
            body.classList.add('bgYellow');
            body.classList.remove('bgRed');
        }

        body.classList.replace('
        ');
    }
}

ejemploDos();