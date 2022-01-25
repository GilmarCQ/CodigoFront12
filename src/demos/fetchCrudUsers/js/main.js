const form = document.querySelector('form');
const name = form.querySelector('#name');
const lastname = form.querySelector('#lastname');
const country = form.querySelector('#country');
const mail = form.querySelector('#mail');
const photo = form.querySelector('#photo');
const btnAdd = form.querySelector('#btn-add');
const btnClean = form.querySelector('#btn-clean');
const listUsersRow = document.querySelector('#list-users');

const URL_API = 'https://61ef3de0d593d20017dbb3c1.mockapi.io';

const getUser = () => {
    return {
        'name': name.value,
        'lastname': lastname.value,
        'photo': photo.value,
        'country': country.value,
        'mail': mail.value,
        'description': description.value
    };
}
const saveUser = (user, callback) => {
    fetch(`${URL_API}/users`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {'Content-Type' : 'application/json;charset=UTF-8'}
    })
    .then(response => {
        return response.json();
    })
    .then(users => {
        callback(users);
    })
    .catch(e => {
        console.log('Error ', e);
    });
}

const addCard = (user) => {
    const nodeCol = document.createElement('div');
    nodeCol.classList.add('col', 's12', 'm4', 'l4', 'xl3');
    const nodeCard = document.createElement('div');
    nodeCard.classList.add('card', 'hoverable');
    const nodeCardImage = document.createElement('div');
    nodeCardImage.classList.add('card-image');
    const nodeCardImageImg = document.createElement('img');
    nodeCardImageImg.classList.add('circle');
    nodeCardImageImg.src = user.photo;

    nodeCardImage.appendChild(nodeCardImageImg);
    nodeCard.appendChild(nodeCardImage);
    
    const divider = document.createElement('div');
    divider.classList.add('divider');

    nodeCard.appendChild(divider);
    
    const nodeCardContent = document.createElement('div');
    nodeCardContent.classList.add('card-content');
    const nodeCardPName = document.createElement('p');
    nodeCardPName.classList.add('truncate');
    nodeCardPName.innerText = `${user.name} ${user.lastname}`;
    const nodeCardPCountry = document.createElement('p');
    nodeCardPCountry.classList.add('truncate');
    nodeCardPCountry.innerText = `${user.country}`;
    const nodeCardPMail = document.createElement('p');
    nodeCardPMail.classList.add('truncate');
    nodeCardPMail.innerText = `${user.mail}`;
    const nodeCardPDescription = document.createElement('p');
    nodeCardPDescription.classList.add('truncate');
    nodeCardPDescription.innerText = `${user.description}`;
    nodeCardContent.appendChild(nodeCardPName);
    nodeCardContent.appendChild(nodeCardPCountry);
    nodeCardContent.appendChild(nodeCardPMail);
    nodeCardContent.appendChild(nodeCardPDescription);
    nodeCard.appendChild(nodeCardContent);
    nodeCol.appendChild(nodeCard);

    listUsersRow.appendChild(nodeCol);
}

const createUser = (event) => {
    event.preventDefault();
    saveUser(getUser(), (users) => {
        console.log('Usuario Agregado ', users);
        listUsersRow.innerHTML = '';
        // users.forEach(user => addCard(user));
        listUsers();
    });
    console.log('Crear Usuario');
}
const getUsers = (callback) => {
    fetch(`${URL_API}/users`,{
        method: 'GET'
    })
    .then(resp => resp.json())
    .then(users => callback(users))
    .catch(e => {
        console.log('Error ', e);
    })
}
const listUsers = () => {
    getUsers((users) => {
        console.log(users);
        users.forEach(user => addCard(user));
    });
}
listUsers();

btnAdd.addEventListener('click', createUser);


