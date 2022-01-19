function makeMobile(props) {
    this.nombre = props.nombre;
    this.modelo = props.modelo;
    this.marca = props.marca;
    this.numeroSerie = props.numeroSerie;
    this.procedencia = props.procedencia;
    this.getInfo = function () {
        return `Nombre ${this.nombre}, modelo ${this.modelo} y serie ${this.numeroSerie}`
    }
}

let huawei = new makeMobile({
    nombre: 'Huawei',
    modelo: 'Model One',
    marca: 'Mark One',
    numeroSerie: 'Serie One',
    procedencia: 'China'
});
// console.log(huawei.getInfo());


/*
* OBJETOS NATIVOS
* */

// string
console.log('Gilmar'.length);
console.log('Gilmar'.concat(' Campana'));
console.log('Gilmar'.includes('ar'));
console.log('Gilmar'.endsWith('mar'));
console.log('Gilmar'.charAt(5).toUpperCase());

// Array
const array = [0, 1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9];

console.log(array.length);
console.log(array.concat(array2));

array.push(20); //Agrega un elemento al final del arreglo
array.pop();    //Elimina el último elemento del arreglo
array.shift();  //Elimina el primero elemento del arreglo



