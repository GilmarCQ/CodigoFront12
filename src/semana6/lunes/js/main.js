const exercise001 = () => {
    const makeFullName = (name, lastName) => {
        const nameUppercase = name.charAt(0).toUpperCase().concat('', name.substr(1, name.length));
        const nameLastName = lastName.charAt(0).toUpperCase().concat('', lastName.substr(1, lastName.length));
        return nameUppercase.concat(' ', nameLastName);
    }
    console.log(makeFullName('gilmar', 'campana'));
}
// exercise001()
const exercise002 = () => {
    const countRepeatLetter = (stringInput, characterFind) => {
        let count = 0;
        for (a = 0 ; a < stringInput.length ; a++) {
            if (stringInput[a] === characterFind) { count++; }
        }
        return count;
    }
    console.log(countRepeatLetter('papas', 'a'));
}
// exercise002();
const exercise003 = () => {
    const multipleN = (col, num) => {
        return col.map(el => el * num);
    }
    console.log(multipleN([0,1,2,3,4,5,6], 5));
}
// exercise003();

// exercise004
const mascotas = [
    {
        name: 'Aronis',
        edad: 12,
        sexo: 'M'
    },
    {
        name: 'terry',
        edad: 4,
        sexo: 'M'
    },
    {
        name: 'juda',
        edad: 3,
        sexo: 'H'
    },
    {
        name: 'zeus',
        edad: 8,
        sexo: 'H'
    }
];
const exercise004 = () => {
    const filterPets = () => {
        const may4 = mascotas.filter(mascota => mascota.edad > 4);
        const men4 = mascotas.filter(mascota => mascota.edad < 4);
        const machos = mascotas.filter(mascota => mascota.sexo === 'M');
        const hembras = mascotas.filter(mascota => mascota.sexo === 'H');
        console.log('Mayores de 4 Años', may4);
        console.log('Menores de 4 Años',men4);
        console.log('Machos', machos);
        console.log('Hembras', hembras);
    }
    filterPets();
}
exercise004();