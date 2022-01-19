const parrafos = document.querySelectorAll('p');
const btnEj01 = document.querySelector('#btn-ej01');

const changeValuesStyles = (selector, props) => {
    selector.style.color = props.color;
    selector.style.fontSize = props.fontSize;
    selector.style.fontFamily = props.fontFamily;
}
const changeValuesA = (selector, href, value) => {
    selector.innerHTML = value;
    selector.href = href;
}
const executeEj001 = () => {
    console.log('456465');
    parrafos.forEach(el => changeValuesStyles(el, {color: 'red', fontSize: '20px', fontFamily: 'Arial, sans serif'}));
    parrafos.forEach(el => changeValuesA(el.firstElementChild, 'www.google.com', 'Valor Nuevo'));
}
btnEj01.addEventListener('click', executeEj001);

const ulChilds = document.querySelectorAll('li');
const btnEj02 = document.querySelector('#btn-ej02');

/**********************************************************************************/
const changeValuesLi = (selector, props) => {
    selector.style.color = props.color;
    selector.style.fontSize = props.fontSize;
    selector.style.backgroundColor = props.backgroundColor;
}
const changeValuesLiValue = (selector, value) => {
    selector.innerHTML += value;
}
const executeEj002 = () => {
    ulChilds.forEach(el => changeValuesStyles(el, {color: 'blue', fontSize: '20px', fontFamily: 'Arial, sans serif'}));
    ulChilds.forEach(el => changeValuesLiValue(el, ' Hola mundo'));
}

btnEj02.addEventListener('click', executeEj002);


// Exercise 003
const divNodes = document.querySelector('div');
const btnEj03 = document.querySelector('#btn-ej03');

const executeEj003 = () => {
    changeValuesStyles(divNodes.firstElementChild, {color: 'purple', fontSize: '10px', fontFamily: 'Arial'});
    changeValuesStyles(divNodes.lastElementChild, {color: 'green', fontSize: '20px', fontFamily: 'Arial'});
    changeValuesStyles(divNodes.firstElementChild.nextElementSibling, {
        color: 'orange',
        fontSize: '10px',
        fontFamily: 'Arial'
    });
}
btnEj03.addEventListener('click', executeEj003);