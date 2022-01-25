const formUser = document.querySelector('form');
const nombres = formUser.querySelector('#form-nombres');
const apellidos = formUser.querySelector('#form-apellidos');
const correo = formUser.querySelector('#form-correo');
const pais = formUser.querySelector('#form-pais');
const edad = formUser.querySelector('#form-edad');
const url = formUser.querySelector('#form-url');
const about = formUser.querySelector('#form-about');
const catalog = document.querySelector('.catalog');
const btnAgregar = formUser.querySelector('#btn-enviar');
const btnReset = formUser.querySelector('#btn-reset');
// const tbody = document.querySelector('.form-users-data').querySelector('table').querySelector('tbody');

let users = [];
const URL_API = 'https://61ef3de0d593d20017dbb3c1.mockapi.io';


const resetDataForm = () => {
    nombres.value = '';
    apellidos.value = '';
    correo.value = '';
    telefono.value = '';
}
const getDataForm = () => {
    // const user = {
    //     'nombres': nombres.value,
    //     'apellidos': apellidos.value,
    //     'correo': correo.value,
    //     'pais': pais.value,
    //     'edad': edad.value,
    //     'url': url.value,
    //     'about': about.value
    // };
    // users.push(user);
    return {
        name: nombres.value,
        lastname: apellidos.value,
        mail: correo.value,
        photo: url.value,
        country: pais.value,
        description: about.value
    };
}
const addCard = (user) => {
    const nodeCard = document.createElement('div');
    nodeCard.classList.add('card');
    nodeCard.classList.add('col-25');
    const nodeCardHeader = document.createElement('div');
    nodeCardHeader.classList.add('card-header');
    const nodeFigure = document.createElement('figure');
    const nodeImg = document.createElement('img');
    nodeImg.src = user.photo;
    nodeFigure.appendChild(nodeImg);
    nodeCardHeader.appendChild(nodeFigure);
    nodeCard.appendChild(nodeCardHeader);
    
    const nodeCardBody = document.createElement('div');
    nodeCardBody.classList.add('card-body');
    const nodePNombres = document.createElement('p');
    nodePNombres.innerText = `${user.name} ${user.lastname}`;
    const nodePPaisEdad = document.createElement('p');
    nodePPaisEdad.innerText = `${user.country}`;
    const nodePCorreo = document.createElement('p');
    nodePCorreo.innerText = `${user.mail}`;
    const nodePAbout = document.createElement('p');
    nodePAbout.classList.add('about');
    nodePAbout.innerText = `${user.description}`;
    nodeCardBody.appendChild(nodePNombres);
    nodeCardBody.appendChild(nodePPaisEdad);
    nodeCardBody.appendChild(nodePCorreo);
    nodeCardBody.appendChild(nodePAbout);
    nodeCard.appendChild(nodeCardBody);
    
    catalog.appendChild(nodeCard);
}
// const addNodes = (user) => {
//     const nodeTr = document.createElement('tr');
//     let nodeTd;
//     let nodeText;
//     Object.entries(user).forEach(([key, value]) => {
//         nodeTd = document.createElement('td');
//         nodeText = document.createTextNode(user[key]);
//         nodeTd.appendChild(nodeText);
//         nodeTr.appendChild(nodeTd);
//     });
//     tbody.appendChild(nodeTr);
// }

const saveUser = (user, callback) => {
    fetch(`${URL_API}/users`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {'Content-Type': 'application/json;charset=UTF-8'}
    })
    .then(res => {
        return res.json();
    })
    .then(res => {
        callback(res);
    })
    .catch(e => {
        console.log('error', e);
    }) 
}
const getUsers = (callback) => {
    fetch(`${URL_API}/users`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json;charset=UTF-8'}
    })
    .then(res => {
        return res.json();
    })
    .then(users => {
        callback(users);
    })
    .catch(e => {
        console.log('error', e);
    }) 
}
function addUser(e) {
    e.preventDefault();
    // const user = getDataForm();
    // addCard(user);
    saveUser(getDataForm(), function(response) {
        console.log('Usuario Agregado');
    });
}
getUsers((usersApi) => {
    users = usersApi;
    console.log('GET USERS');
    console.log(users);
    users.forEach(user => {
        addCard(user);
    });
});


formUser.addEventListener('submit', addUser);
formUser.addEventListener('reset', resetDataForm);