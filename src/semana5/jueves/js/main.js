// Ejercicio 001
const suma = (n1, n2) => {
    return n1 + n2;
}
// console.log(`La suma es: ${suma(10, 20)}`);

//Ejercicio 002
const promedioNotas = (notas) => {
    let sumaNotas = 0;
    let cantidadNotas = Number(prompt('Ingrese el numero de notas a ingresar'));
    console.log(cantidadNotas);
    let nota = 0;
    for (let a = 0; a < cantidadNotas; a++) {
        nota = Number(prompt('Ingrese nota ', a + 1));
        if (nota > 20) {
            alert('Nota invalida, la nota debe estar entre 0 y 20');
            a--;
        } else {
            sumaNotas += nota;
        }
    }
    return (sumaNotas / cantidadNotas);

}
// console.log(`El promedio de las notas es ${promedioNotas()}`);

// Ejercicio 003
const areaRectangle = (base, height) => {
    return (base * height);
}
// console.log(`Èl area del Rectangulo es: ${areaRectangle(4, 6)}`);

// Ejercicio 004
const areaTriangle = (base, height) => {
    return (base * height) / 2;
}
// console.log(`Èl area del Triangulo es: ${areaTriangle(4, 6)}`);

// Ejercicio 005
const areaCircle = (ratio) => {
    return (Math.PI * Math.pow(ratio));
}
// console.log(`Èl area del Circulo es: ${areaCircle(10)}`);

// Ejercicio 006
const weeklySalary = () => {
    const hourSalary = prompt('Ingrese el salario de hora / hombre');
    const hoursWorked = prompt('Ingrese la cantidad de horas trabajadas en la semana');
    return hourSalary * hoursWorked;
}
// console.log(`El sueldo del trabajador es: ${weeklySalary()} soles.`);

// Ejercicio 007
const convertMetersToInches = () => {
    const meters = Number(prompt('Ingrese la cantidad de metros de tela:'));
    const inchMeter = 0.0254;
    return meters / inchMeter;
}
// console.log(`La cantidad tela a pedir es : ${convertMetersToInches()} pulgadas.`);

// Ejercicio 008
const convertSolesToDollars = () => {
    const dollarPrice = Number(prompt('Ingrese el precio del dolar a la fecha:'));
    const solesAmount = Number(prompt('Ingrese la cantidad de soles que dispone:'));
    return solesAmount / dollarPrice;
}
// console.log(`Usted podra comprar ${convertSolesToDollars()} dolar(es)`);

/*
* Ejercicio 009
* */
const ejercicio009 = () => {
    const getAgeWorkker = (birthYear) => {
        console.log(new Date().getFullYear());
        return new Date().getFullYear() - birthYear;
    }
    const birthYear = Number(prompt('Ingrese el año de nacimiento del trabajador'));
    console.log(`La persona tiene o cumplira ${getAgeWorkker(birthYear)} años en el presente año.`);
}
// ejercicio009();

/*
* Ejercicio 010
* */
const ejercicio010 = () => {
    const getPersonYounger = (persons) => {
        let youngerIndex = 0;
        for (let a = 1; a < persons.length; a++) {
            youngerIndex = persons[youngerIndex].edad < persons[a].edad ? youngerIndex : a;
        }
        return persons[youngerIndex];
    }
    const persons = [
        {nombre: 'Pedro', edad: 25},
        {nombre: 'Mario', edad: 14},
        {nombre: 'Gilmar', edad: 15},
        {nombre: 'Sebastian', edad: 16},
        {nombre: 'Miguel', edad: 99},
    ];
    let person = getPersonYounger(persons);
    console.log(`La persona mas joven es ${person.nombre} con ${person.edad} año(s)`);
}
// ejercicio010();

/*
* Ejercicio 011
* */
const ejercicio011 = () => {
    const setBonusTimeWorked = (yearsWorked) => {
        if (yearsWorked < 5) {
            return yearsWorked * 100;
        } else {
            return 1000;
        }
    }
    const yearsWorked = Number(prompt('Ingrese la cantidad de años trabajados del trabajador:'));
    console.log(`El trabajador recibira un bonus de ${setBonusTimeWorked(yearsWorked)} soles.`);
}
// ejercicio011();

/*
* Ejercicio 012
* */
const ejercicio012 = () => {
    const teacherIncrementSalary = (yearsWorked) => {
        let salary = 1500;
        for (let a = 0; a < yearsWorked; a++) {
            salary += (salary * 0.1);
        }
        return salary;
    }
    console.log(`Salario al cabo de 6 años es ${teacherIncrementSalary(6)}`);
}
// ejercicio012();

/*
* Ejercicio 13
* */
const ejercicio013 = () => {
    const checkQualifications = (totalStudents) => {
        let totalAprobados = 0;
        let totalDesaprobados = 0;
        let scoreStudent = 0;
        for (let a = 0; a < totalStudents; a++) {
            do {
                scoreStudent = Number(prompt(`Ingrese la nota del alumno ${a + 1} (0 - 20)`));
            } while (scoreStudent < 0 || scoreStudent > 20);
            scoreStudent > 10 ? totalAprobados++ : totalDesaprobados++;
        }
        return {totalAprobados, totalDesaprobados};
    }
    const scoreNotes = checkQualifications(3);
    console.log(`Total aprobados ${scoreNotes.totalAprobados} , total desaprobados ${scoreNotes.totalDesaprobados}`);
}
// ejercicio013();

/*
* Ejercicio 14
* */
const ejercicio014 = () => {
    const countLamps = (lamps) => {
        let lampsGreen = 0;
        let lampsRed = 0;
        let lampsWhite = 0;
        lamps.forEach(lamp => {
            switch (lamp.toLowerCase()) {
                case 'verde':
                    lampsGreen++;
                    break;
                case 'rojo':
                    lampsRed++;
                    break;
                case 'blanco':
                    lampsWhite++;
                    break;
            }
        })
        // for (let a = 0; a < lamps.length; a++) {
        //     switch (lamps[a].toLowerCase()) {
        //         case 'verde':
        //             lampsGreen++;
        //             break;
        //         case 'rojo':
        //             lampsRed++;
        //             break;
        //         case 'blanco':
        //             lampsWhite++;
        //             break;
        //     }
        // }
        console.log(
            `Hay ${lampsGreen} focos verdes, ${lampsRed} focos rojos y ${lampsWhite} focos blancos`
        );
    }
    const lamps = ['verde', 'rojo', 'verde', 'blanco', 'verde', 'rojo', 'rojo', 'verde', 'verde', 'rojo',];
    countLamps(lamps);
}
ejercicio014();

/*
* Ejercicio 15
* */
const ejercicio015 = () => {
    const validateVotingAge = (age) => {
        return age >= 18;
    }
    console.log(`La persona ${validateVotingAge(18) ? 'si' : 'no'} pueded votar.`);
}
// ejercicio015();
