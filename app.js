// 1. Estado de la aplicación
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// 2. Selectores
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const totalCounter = document.getElementById('total-tasks');
const completedCounter = document.getElementById('completed-tasks');

// 3. Funciones
function updateStats() {
    totalCounter.innerText = tasks.length;
    completedCounter.innerText = tasks.filter(t => t.completed).length;
}

function saveAndRender() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
    updateStats();
}

function renderTasks() {
    taskList.innerHTML = '';
    
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = `task-item ${task.completed ? 'completed' : ''}`;
        
        li.innerHTML = `
            <span onclick="toggleTask(${index})">${task.title}</span>
            <button onclick="deleteTask(${index})" style="background: var(--danger); padding: 5px 10px; font-size: 12px;">Eliminar</button>
        `;
        taskList.appendChild(li);
    });
}

function addTask(e) {
    e.preventDefault();
    const title = taskInput.value.trim();
    if (title) {
        tasks.push({ title, completed: false });
        taskInput.value = '';
        saveAndRender();
    }
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    saveAndRender();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    saveAndRender();
}

// 4. Event Listeners
taskForm.addEventListener('submit', addTask);

// 5. Carga inicial
renderTasks();
updateStats();