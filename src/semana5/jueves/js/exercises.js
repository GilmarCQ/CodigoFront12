/*JS FOUNDATION EXERCISES*/

/*
* Exercise 007 - Guess Number
* */
const exercise007 = () => {
    const guessNumber = () => {
        const randomNumber = Math.random(1, 10);
        console.log('123');
        console.log(randomNumber);
        let numberInput = 0;
        do {
            numberInput = Number(prompt('Ingrese un número'));
        } while (numberInput !== randomNumber);
        console.lolg('Felicitaciones ese era.');
    }
    guessNumber();
}
// exercise007();

/*
* Exercise 008 - Multiple of 5
* */
const exercise008 = () => {
    const isMultiple5 = (numberMultiple) => {
        return (numberMultiple % 5 === 0);
    }
    const numberCheck = 140;
    console.log(`El numero ${numberCheck} ${isMultiple5(numberCheck) ? 'si' : 'no'} es múltiplo de 5.`);
}
// exercise008();

/*
* Exercise 009 - Number higher, less or equal to 10
* */
const exercise010 = () => {
    const numberCheck10 = (numberInput) => {
        if (!isNaN(numberInput)) {
            if (numberInput < 10) {
                console.log('El número es menor que 10');
            } else if (numberInput === 10) {
                console.log('El número es igual que 10');
            } else {
                console.log('El número es mayor que 10');
            }
        } else {
            throw ('El numero ingresado no es un numero');
        }
    }
    const numberInput = Number(prompt('Ingresa un número'));
    numberCheck10(numberInput);
}
// exercise010();

/*
* Exercise 011 - Bing Bong
* */
const exercise011 = () => {
    const multipleOf = (numberInput, numberMultiple) => {
        return (numberInput % numberMultiple) === 0;
    }
    const bingbong = (numberInput) => {
        if (!isNaN(numberInput)) {
            const flagMultple3 = multipleOf(numberInput, 3);
            const flagMultple5 = multipleOf(numberInput, 5);
            if (flagMultple3 || flagMultple5) {
                if (flagMultple3 && flagMultple5) {
                    console.log('Bing Bong');
                } else if (flagMultple3) {
                    console.log('Bing');
                } else {
                    console.log('Bong');
                }
            } else {
                console.log(numberInput);
            }
        } else {
            alert('Formato de Núumero invalido.');
        }
    }
    const numberInput = Number(prompt('Ingrese un número'));
    bingbong(numberInput);
}
// exercise011();

/*
* Exercise 012 - Get Generation Name
* */
const exercise012 = () => {
    const getGenerationPerson = (birthYear) => {
        if (birthYear < 1945) {
            console.log('Generación Gran Generación');
        } else if (birthYear < 1965) {
            console.log('Generación Baby Boomer');
        } else if (birthYear < 1982) {
            console.log('Generación X');
        } else if (birthYear < 1995) {
            console.log('Generación Millenial');
        } else {
            console.log('Generación Z');
        }
    }
    getGenerationPerson(1980);
}
// exercise012();

/*
*
* */

