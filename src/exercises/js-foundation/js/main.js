// exercise016
const exercise016 = () => {
    const numbersRange = (numberOne, numberTwo) => {
        for (let a = numberOne; a <= numberTwo; a++) {
            console.log('Numero ', a);
        }
    }
    numbersRange(4, 10);
}
// exercise016();

const exercise017 = () => {
    const exitInput = () => {
        let cadena = '';
        do {
            cadena = prompt('Ingrese Cadena')
            if (cadena !== 'salir') {
                console.log('Usted digito ', cadena);
            }
        } while (cadena !== 'salir');
        console.log('Gracias por su visita');
    }
    exitInput();
}
// exercise017();

// exercise019
const exercise019 = () => {
    const numbersRange = (numberOne, numberTwo) => {
        if (numberOne < numberTwo) {
            for (let a = numberOne; a <= numberTwo; a++) {
                console.log('Numero ', a);
            }
        } else {
            for (let a = numberOne; a >= numberTwo; a--) {
                console.log('Numero ', a);
            }
        }
    }
    numbersRange(14, 10);
}
// exercise019();

// exercise020
const exercise020 = () => {
    const printPares = () => {
        for (let i = 0; i <= 100; i++) {
            if (i % 2 === 0) {
                console.log(i);
            }
        }
    }
    printPares();
}
// exercise020();

// exercise 023
const exercise023 = () => {
    const isMultiple = (numberInput, numberMultiple) => {
        return (numberInput % numberMultiple) === 0;
    }
    console.log(`8 ${isMultiple(8, 4) ? 'es' : 'no es'} multiplo de 4`);
}
// exercise023();

// exercise 026
const exercise026 = () => {
    const escalera = (count) => {
        let cadena = '';
        for (let i = 1; i <= count; i++) {
            cadena = '';
            for (let j = 1; j <= i; j++) {
                cadena += '#';
            }
            console.log(cadena);
        }
    }
    escalera(10);
}
// exercise026();

// exercise 033
const exercise033 = () => {
    const may10 = (arrayInput) => {
        return arrayInput.filter(el => el > 10);
    }
    console.log(may10([1,2,4,7,11,45,78,98]));
}
// exercise033();

// exercise 035
const exercise035 = () => {
    const countOnes = (arrayInput) => {
        return arrayInput.filter(el => el > 10).length;
    }
    console.log(countOnes([1,2,4,7,11,1,45,78,98,1]));
}
// exercise035();

// exercise 038
const exercise038 = () => {
    const abuelaSorda = (stringInput) => {
        (stringInput === stringInput.toUpperCase())
            ? console.log('Ahh si manzanas') : console.log('habla mas duro mi hijito');
    }
    abuelaSorda('GFD DDD');
}
// exercise038();

// exercise 043
const exercise043 = () => {
    const addWeight = (person, peso) => {
        return {...person, peso};
    }
    console.log(addWeight({name: 'jose', edad: 28}, 75));
}
// exercise043();

// exercise 044
const exercise044 = () => {
    const getValue = (obj, key) => {
        if (!obj.hasOwnProperty(key)) {
            return false
        }
        return obj[key];
    }
    console.log(getValue({ a: 1, b: 2, c: 3 }, "k"));
}
// exercise044();

// exercise 044
const exercise045 = () => {
    const changeWeight = (obj) => {
        if (obj.hasOwnProperty('weight')) {
            obj.weight = obj.weight * 2;
            return obj;
        }
        return false
    }
    console.log(changeWeight({name: 'jose', edad: 28, weight: 45}));
}
// exercise045();
