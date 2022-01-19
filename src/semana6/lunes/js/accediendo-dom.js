const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3');
const h4 = document.querySelector('h4');
const h5 = document.querySelector('h5');
const h6 = document.querySelector('h6');

function modifyNode(selector, styles) {
    selector.style.color = styles.color;
    selector.style.fontSize = styles.fontSize;
    selector.style.backgroundColor = styles.backgroundColor;
    selector.style.fontFamily = styles.fontFamily;
    selector.style.padding = '10px';
    selector.style.borderRadius = '10px';
}

modifyNode(h1, {
    color: 'white',
    fontSize: '20px',
    backgroundColor: 'blue',
    fontFamily: 'Arial, sans serif'
});
modifyNode(h2, {
    color: 'white',
    fontSize: '20px',
    backgroundColor: 'green',
    fontFamily: 'Arial, sans serif'
});
modifyNode(h3, {
    color: 'white',
    fontSize: '20px',
    backgroundColor: 'red',
    fontFamily: 'Arial, sans serif'
});
modifyNode(h4, {
    color: 'white',
    fontSize: '20px',
    backgroundColor: 'purple',
    fontFamily: 'Arial, sans serif'
});
modifyNode(h5, {
    color: 'white',
    fontSize: '20px',
    backgroundColor: 'black',
    fontFamily: 'Arial, sans serif'
});
modifyNode(h6, {
    color: 'white',
    fontSize: '20px',
    backgroundColor: 'violet',
    fontFamily: 'Arial, sans serif'
});

document.querySelectorAll('p').forEach(node => modifyNode(node, {
    color: 'white',
    fontSize: '20px',
    backgroundColor: 'blue',
    fontFamily: 'Arial, sans serif'
}))

