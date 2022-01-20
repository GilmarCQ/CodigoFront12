const buttons = document.querySelectorAll('button');

function toggleProperties () {
    this.style.backgroundColor = this.dataset.colorBg;
    this.style.color = this.dataset.color;
    this.innerHTML = this.dataset.text;
}

buttons.forEach(button => button.onclick = toggleProperties);