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

const users = [];


const resetDataForm = () => {
    nombres.value = '';
    apellidos.value = '';
    correo.value = '';
    telefono.value = '';
}
const getDataForm = () => {
    const user = {
        'nombres': nombres.value,
        'apellidos': apellidos.value,
        'correo': correo.value,
        'pais': pais.value,
        'edad': edad.value,
        'url': url.value,
        'about': about.value
    };
    users.push(user);
    return user;
}
const addCard = (user) => {
    const nodeCard = document.createElement('div');
    nodeCard.classList.add('card');
    nodeCard.classList.add('col-25');
    const nodeCardHeader = document.createElement('div');
    nodeCardHeader.classList.add('card-header');
    const nodeFigure = document.createElement('figure');
    const nodeImg = document.createElement('img');
    nodeImg.src = user.url;
    nodeFigure.appendChild(nodeImg);
    nodeCardHeader.appendChild(nodeFigure);
    nodeCard.appendChild(nodeCardHeader);
    
    const nodeCardBody = document.createElement('div');
    nodeCardBody.classList.add('card-body');
    const nodePNombres = document.createElement('p');
    nodePNombres.innerText = `${user.nombres} ${user.apellidos}`;
    const nodePPaisEdad = document.createElement('p');
    nodePPaisEdad.innerText = `${user.edad} ${user.pais}`;
    const nodePCorreo = document.createElement('p');
    nodePCorreo.innerText = `${user.correo}`;
    const nodePAbout = document.createElement('p');
    nodePAbout.classList.add('about');
    nodePAbout.innerText = `${user.about}`;
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

function addUser(e) {
    e.preventDefault();
    const user = getDataForm();
    addCard(user);
}

formUser.addEventListener('submit', addUser);
formUser.addEventListener('reset', resetDataForm);