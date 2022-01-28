const form = document.querySelector('form');
const tasksEl = document.querySelector('.tasks');

const addTaskStorage = (task) => {
    let tasks = [];
    if (localStorage.getItem('tasks')) {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
const addTaskNode = (elParent, task) => {
    const element = document.createElement('div');
    element.classList.add('task', 'col', 's12');
    element.innerHTML =
        `<label>
            <input type="checkbox" class="filled-in" onclick="checkedInput(event)" />
            <span>${task.task}</span>
            <b>${task.date}</b>
            <button onclick="removeTask()">X</button>
        </label>`;
    elParent.appendChild(element);

}
const getTasks = () => {
    return JSON.parse(localStorage.getItem('tasks'));
}
const listTaks = async () => {
    try {
        tasksEl.innerHTML = '';
        const lista = getTasks();
        if (lista) {
            getTasks().forEach(el => addTaskNode(tasksEl, el));
        }
    } catch (e) {
        console.log(e);
    }
}
const addTask = (event) => {
    event.preventDefault();
    const taskValue = form.querySelector('input').value;
    const dateValue = form.querySelector('#datepicker').value;
    const lista = getTasks();
    if (!lista) {
        addTaskStorage({task: taskValue, date: dateValue});
        addTaskNode(tasksEl, {task: taskValue, date: dateValue});
        form.reset();
        M.toast({html: 'La tarea se agrego correctamente.', classes: 'green'})
    } else {
        if (lista.find(el => el.task === taskValue) == null) {
            addTaskStorage({task: taskValue, date: dateValue});
            addTaskNode(tasksEl, {task: taskValue, date: dateValue});
            form.reset();
            M.toast({html: 'La tarea se agrego correctamente.', classes: 'green'})
        } else {
            M.toast({html: 'La tarea ya se encuentra registrada.', classes: 'red'})
        }
    }
}
const removeTask = async () => {
    const value = event.target.parentElement.querySelector('span').textContent;
    const tasks = await getTasks().filter(el => el.task !== value);
    await localStorage.setItem('tasks', JSON.stringify(tasks));
    listTaks();
    M.toast({html: 'La tarea se elimino correctamente.', classes: 'lime'})
}
const checkedInput = (event) => {
    event.target.parentElement.querySelector('span').classList.toggle('underline');
}
form.addEventListener('submit', addTask);
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems, {format: "yyyy/mm/dd"});
});

listTaks();