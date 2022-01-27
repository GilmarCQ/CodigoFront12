const form = document.querySelector('#formAdd');
const name = form.querySelector('#name');
const lastname = form.querySelector('#lastname');
const country = form.querySelector('#country');
const mail = form.querySelector('#mail');
const photo = form.querySelector('#photo');
const btnAdd = form.querySelector('#btn-add');
const modal = document.querySelector('#modal1');
const formModal = modal.querySelector('form');
const listUsersRow = document.querySelector('#list-users');
const URL_API = 'https://61ef3de0d593d20017dbb3c1.mockapi.io';
const body = document.querySelector('body');
const spinner = document.querySelector('.spinner');
const showSpinner = () => {
    body.style.overflow = 'hidden';
    spinner.classList.add('show');
}
const hideSpinner = () => {
    body.style.overflow = 'visible';
    spinner.classList.remove('show');
}
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
const getUserModal = () => {
    return {
        'name': formModal.querySelector('#nameModal').value,
        'lastname': formModal.querySelector('#lastnameModal').value,
        'photo': formModal.querySelector('#photoModal').value,
        'country': formModal.querySelector('#countryModal').value,
        'mail': formModal.querySelector('#mailModal').value,
        'description': formModal.querySelector('#descriptionModal').value
    };
}
const cleanForm = () => {
    form.querySelector('#name').value = '';
    form.querySelector('#name').classList.remove('valid');
    form.querySelector('#name').parentElement.querySelector('label').classList.remove('active');
    form.querySelector('#lastname').value = '';
    form.querySelector('#lastname').classList.remove('valid');
    form.querySelector('#lastname').parentElement.querySelector('label').classList.remove('active');
    form.querySelector('#country').value = '';
    form.querySelector('#country').classList.remove('valid');
    form.querySelector('#country').parentElement.querySelector('label').classList.remove('active');
    form.querySelector('#mail').value = '';
    form.querySelector('#mail').classList.remove('valid');
    form.querySelector('#mail').parentElement.querySelector('label').classList.remove('active');
    form.querySelector('#photo').value = '';
    form.querySelector('#photo').classList.remove('valid');
    form.querySelector('#photo').parentElement.querySelector('label').classList.remove('active');
    form.querySelector('#description').value = '';
    form.querySelector('#description').classList.remove('valid');
    form.querySelector('#description').parentElement.querySelector('label').classList.remove('active');
}
const saveUser = (user, callback) => {
    fetch(`${URL_API}/users`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: { 'Content-Type': 'application/json;charset=UTF-8' }
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
    nodeCol.innerHTML = `
        <div class="card hoverable">
            <div class="card-image">
                <img
                    class="circle"
                    src="${user.photo}"
                    alt=""
                />
                <a class="btn-floating halfway-fab waves-effect waves-light red hoverable" onclick="deleteUser(${user.id})">
                    <i class="material-icons">delete</i></a>
                <a class="btn-floating halfway-fab left green hoverable" onclick="updateUser(${user.id})">
                    <i class="material-icons">edit</i></a>
            </div>
            <div class="divider"></div>
            <div class="card-content">
                <p>${user.name.toUpperCase()} ${user.lastname.toUpperCase()}</p>
                <p class="truncate">${user.mail}</p>
                <p class="truncate">${user.country.toUpperCase()}</p>
                <p>${user.description}</p>
            </div>
        </div>`;
    const divider = document.createElement('div');
    divider.classList.add('divider');
    listUsersRow.appendChild(nodeCol);
}
const createUser = (event) => {
    event.preventDefault();
    showSpinner();
    saveUser(getUser(), (users) => {
        M.toast({ html: 'Usuario agregado correctamente.' }, 4000, 'blue')
        listUsers();
        cleanForm();
    });
}
const getUsers = (callback) => {
    showSpinner();
    fetch(`${URL_API}/users`, {
        method: 'GET'
    })
        .then(resp => resp.json())
        .then(users => callback(users))
        .catch(e => {
            console.log('Error ', e);
            hideSpinner();
        })
}
const getUserId = (id, callback) => {
    fetch(`${URL_API}/users/${id}`)
        .then(res => res.json())
        .then(data => callback(data))
        .catch(e => console.log(e))
}
const deleteUser = (id) => {
    showSpinner();
    fetch(`${URL_API}/users/${id}`, {
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(res => {
            M.toast({ html: 'Usuario eliminado correctamente.' }, 4000, 'blue');
            listUsers();
        })
        .catch(e => console.log('error ', e));
}
const setInputValue = (form, el, valueText) => {
    form.querySelector(el).value = valueText;
    form.querySelector(el).parentElement.querySelector('label').classList.add('active');
}
const onModalOpen = (id) => {
    showSpinner();
    getUserId(id, (user) => {
        const modal = document.querySelector('#modal1');
        const form = modal.querySelector('form');
        setInputValue(form, '#nameModal', user.name);
        setInputValue(form, '#lastnameModal', user.lastname);
        setInputValue(form, '#countryModal', user.country);
        setInputValue(form, '#mailModal', user.mail);
        setInputValue(form, '#photoModal', user.photo);
        setInputValue(form, '#descriptionModal', user.description);
        hideSpinner();
    })
};
const updateUser = (id) => {
    var elems = document.querySelector('.modal');
    var instances = M.Modal.init(elems, {
        dismissible: false,
        onOpenEnd: onModalOpen(id),
        id: id
    });
    instances.open();
}
const updateUserModal = (event) => {
    event.preventDefault();
    showSpinner();
    fetch(`${URL_API}/users/${modal.M_Modal.options.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(getUserModal())
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            modal.M_Modal.close();
            M.toast({ html: 'Usuario editado correctamente.' }, 4000, 'blue')
            listUsers();
        })
        .catch(e => console.log(e))
}
const closeModal = (event) => {
    event.preventDefault();
    modal.M_Modal.close();
}
const listUsers = () => {
    getUsers((users) => {
        listUsersRow.innerHTML = '';
        users.forEach((user, index) => {
            addCard(user);
            if (index == users.length - 1) {
                hideSpinner();
            }
        });
    });
}
listUsers();
form.addEventListener('submit', createUser);
form.addEventListener('reset', cleanForm);
formModal.addEventListener('submit', updateUserModal);
formModal.addEventListener('reset', closeModal);

