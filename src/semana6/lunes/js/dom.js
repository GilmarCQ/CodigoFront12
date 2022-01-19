const h2 = document.querySelector("h2");
const h3 = document.querySelector("h3");

console.log('H2 %O', h2);
console.log('H3 %O', h3);
h2.style.color = '#12f';
h3.style.color = '#d4d';
h2.style.fontSize = '40px';
h3.style.fontSize = '40px';


function addSize() {
    this.style.fontSize =
        Number(this.style.fontSize.replace('px', '')) + 1 + 'px';
}

function removeSize() {
    this.style.fontSize =
        Number(this.style.fontSize.replace('px', '')) - 1 + 'px';
}
h2.onmouseover = addSize;
h2.onmouseout = removeSize;
h2.onclick = addSize;
h3.onmouseout = removeSize;
h3.onmouseover = addSize;
h3.onclick = addSize;

