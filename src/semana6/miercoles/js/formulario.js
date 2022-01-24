
function ejemploUno() {
    const form = document.querySelector('form');

    form.onsubmit = function (event) {
        event.preventDefault();
        const name = this.querySelector(".js_name")
        const lastname = this.querySelector(".js_lastname")
        const age = this.querySelector(".js_age")
        const country = this.querySelector(".js_country")
        const description = this.querySelector(".js_description")
        const dataUser = {
            name: name.value,
            lastname: lastname.value,
            age: age.value,
            country: country.value,
            description: description.value
        }

        console.log(name.value)
        console.log(lastname.value)
        console.log(age.value)
        console.log(country.value)
        console.log(description.value)

        console.log("dataUser", dataUser)
        alert("Felicidades se grabo el registro")
    }

    const enlace = document.querySelector('a');

    enlace.onclick = function (event) {
        event.preventDefault();
        console.log("click en enlace")
    }
}

function ejemploDos() {
    const form = document.querySelectorAll('form')[1];
    form.onsubmit = function (e) {
        e.preventDefault();
        const select = form.querySelector('select');
        const numeros = form.querySelectorAll('input');

        switch (select.value) {
            case '+':
                alert(`Sumatoria: ${Number(numeros[0].value) + Number(numeros[1].value)}`);
                break;
            case '-':
                alert(`Resta: ${Number(numeros[0].value) - Number(numeros[1].value)}`);
                break;
            case '*':
                alert(`Multiplicacion: ${Number(numeros[0].value) * Number(numeros[1].value)}`);
                break;
            case '/':
                alert(`Division: ${Number(numeros[0].value) / Number(numeros[1].value)}`);
                break;
        }
    }
}
ejemploDos();