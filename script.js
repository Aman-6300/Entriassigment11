const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const addTaskBtn = document.getElementById('addTaskBtn');
const removeTaskBtn = document.getElementById('removeTaskBtn');

let tasks = [];

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = `${index + 1}. ${task}`;
        taskList.appendChild(li);
    });
}

addTaskBtn.addEventListener('click', () => {
    const task = taskInput.value.trim();
    if (task) {
        tasks.push(task);
        renderTasks();
        taskInput.value = '';
    }
});

removeTaskBtn.addEventListener('click', () => {
    tasks.pop();
    renderTasks();
});
