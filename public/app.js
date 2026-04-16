/*t tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let currentFilter = 'all';

// Selectores
const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');
const themeBtn = document.getElementById('theme-toggle');

// 🌙 Lógica Modo Oscuro
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeBtn.innerText = document.body.classList.contains('dark-mode') ? "☀️ Modo Claro" : "🌙 Modo Oscuro";
});

// 🔍 Lógica de Filtros
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        e.target.classList.add('active');
        currentFilter = e.target.dataset.filter;
        renderTasks();
    });
});

// 📝 Renderizar Tareas (ARREGLADO para mostrar prioridad)
function renderTasks() {
    taskList.innerHTML = '';
    
    // Filtrar tareas según el botón seleccionado
    const filtered = tasks.filter(t => {
        if (currentFilter === 'pending') return !t.completed;
        if (currentFilter === 'completed') return t.completed;
        return true;
    });

    filtered.forEach((task, index) => {
        const li = document.createElement('li');
        
        // Aplicamos la clase de prioridad (ej: priority-high)
        li.className = `task-item priority-${task.priority} ${task.completed ? 'completed' : ''}`;
        
        li.innerHTML = `
            <div style="display:flex; align-items:center; gap:10px;">
                <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleTask(${index})">
                <span>${task.title}</span>
            </div>
            <div style="display:flex; align-items:center; gap:10px;">
                <span class="priority-label">${getPriorityText(task.priority)}</span>
                <button onclick="deleteTask(${index})" style="background:none; border:none; cursor:pointer; font-size:1.2rem;">🗑️</button>
            </div>
        `;
        taskList.appendChild(li);
    });
    updateStats();
}

// Función auxiliar para el texto de prioridad
function getPriorityText(p) {
    const texts = { 'high': 'URGENTE', 'medium': 'MEDIA', 'low': 'BAJA' };
    return texts[p] || 'BAJA';
}

// ➕ Añadir Tarea
taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('task-input').value;
    const priority = document.getElementById('task-priority').value;
    
    tasks.push({ title, priority, completed: false });
    document.getElementById('task-input').value = '';
    save();
});

function toggleTask(index) {
    // Ajuste para que el toggle funcione bien con los filtros
    const filtered = tasks.filter(t => {
        if (currentFilter === 'pending') return !t.completed;
        if (currentFilter === 'completed') return t.completed;
        return true;
    });
    
    // Buscamos la tarea real en el array original para marcarla
    const taskTitle = filtered[index].title;
    const realIndex = tasks.findIndex(t => t.title === taskTitle);
    
    tasks[realIndex].completed = !tasks[realIndex].completed;
    save();
}

function deleteTask(index) {
    const filtered = tasks.filter(t => {
        if (currentFilter === 'pending') return !t.completed;
        if (currentFilter === 'completed') return t.completed;
        return true;
    });
    
    const taskTitle = filtered[index].title;
    tasks = tasks.filter(t => t.title !== taskTitle);
    save();
}

function updateStats() {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    const percent = total === 0 ? 0 : (completed / total) * 100;

    document.getElementById('total-tasks').innerText = total;
    document.getElementById('completed-tasks').innerText = completed;
    

    const progressBar = document.getElementById('progress-bar');
    if(progressBar) progressBar.style.width = percent + '%';
}

function save() {
    try {
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
    } catch (e) {
        console.error("Error al guardar:", e);
    }
}

// Carga inicial
renderTasks();

const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', () => {
    const term = searchInput.value.toLowerCase();
    const tasks = document.querySelectorAll('.task-item'); // Asegúrate de que tus tareas tengan la clase 'task-item'

    tasks.forEach(task => {
        const taskText = task.querySelector('span').textContent.toLowerCase();
        if (taskText.includes(term)) {
            task.style.display = 'flex';
        } else {
            task.style.display = 'none';
        }
    });
});
// Función para editar tareas al hacer doble clic
function habilitarEdicion(elementoTarea, tareaId) {
    elementoTarea.addEventListener('dblclick', () => {
        const nombreActual = elementoTarea.textContent;
        const nuevoNombre = prompt("Edita tu tarea:", nombreActual);
        
        if (nuevoNombre && nuevoNombre.trim() !== "") {
            elementoTarea.textContent = nuevoNombre.trim();
            // Llama aquí a tu función de guardar en LocalStorage
            saveTasks(); 
        }
    });
}*/


/* Versión con Backend (Express.js) 

// 🚩 CAMBIO 1: Declaramos la URL de nuestra API
const API_URL = '/api/v1/tasks';
let tasks = []; 
let currentFilter = 'all';

// Selectores
const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');
const themeBtn = document.getElementById('theme-toggle');

// 🌙 Lógica Modo Oscuro (Sin cambios)
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeBtn.innerText = document.body.classList.contains('dark-mode') ? "☀️ Modo Claro" : "🌙 Modo Oscuro";
});

// 🔍 Lógica de Filtros (Sin cambios)
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        e.target.classList.add('active');
        currentFilter = e.target.dataset.filter;
        renderTasks();
    });
});

// 🚩 CAMBIO 2: Función para cargar tareas desde el servidor
async function loadTasksFromServer() {
    try {
        const response = await fetch(API_URL);
        tasks = await response.json();
        renderTasks();
    } catch (error) {
        console.error("Error conectando con el servidor:", error);
    }
}

// 📝 Renderizar Tareas (Actualizado para usar IDs del servidor)
function renderTasks() {
    taskList.innerHTML = '';
    
    const filtered = tasks.filter(t => {
        if (currentFilter === 'pending') return !t.completed;
        if (currentFilter === 'completed') return t.completed;
        return true;
    });

    filtered.forEach((task) => {
        const li = document.createElement('li');
        li.className = `task-item priority-${task.priority || 'low'} ${task.completed ? 'completed' : ''}`;
        
        // 🚩 CAMBIO: Usamos task.id (que viene del backend) en lugar de index
        li.innerHTML = `
            <div style="display:flex; align-items:center; gap:10px;">
                <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleTask('${task.id}')">
                <span>${task.title}</span>
            </div>
            <div style="display:flex; align-items:center; gap:10px;">
                <span class="priority-label">${getPriorityText(task.priority)}</span>
                <button onclick="deleteTask('${task.id}')" style="background:none; border:none; cursor:pointer; font-size:1.2rem;">🗑️</button>
            </div>
        `;
        taskList.appendChild(li);
    });
    updateStats();
}

function getPriorityText(p) {
    const texts = { 'high': 'URGENTE', 'medium': 'MEDIA', 'low': 'BAJA' };
    return texts[p] || 'BAJA';
}

// 🚩 CAMBIO 3: Añadir Tarea enviando datos al Backend
taskForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = document.getElementById('task-input').value;
    const priority = document.getElementById('task-priority').value;
    
    if (!title.trim()) return;

    try {
        await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, priority })
        });
        document.getElementById('task-input').value = '';
        loadTasksFromServer(); // Recargamos la lista
    } catch (error) {
        console.error("Error al crear tarea:", error);
    }
});

// 🚩 CAMBIO 4: Borrar Tarea en el servidor
async function deleteTask(id) {
    try {
        await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
        loadTasksFromServer();
    } catch (error) {
        console.error("Error al borrar:", error);
    }
}

// Nota: Para toggleTask necesitaríamos un método PUT/PATCH en el backend. 
// De momento lo dejamos local o podrías implementar el update en el server.
function toggleTask(id) {
    const task = tasks.find(t => t.id === id);
    if(task) {
        task.completed = !task.completed;
        renderTasks();
    }
}

function updateStats() {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    const percent = total === 0 ? 0 : (completed / total) * 100;
    document.getElementById('total-tasks').innerText = total;
    document.getElementById('completed-tasks').innerText = completed;
    const progressBar = document.getElementById('progress-bar');
    if(progressBar) progressBar.style.width = percent + '%';
}

// 🚩 CAMBIO FINAL: Iniciamos cargando desde el servidor
loadTasksFromServer();

// Lógica de búsqueda (Sin cambios)
const searchInput = document.getElementById('searchInput');
if(searchInput) {
    searchInput.addEventListener('input', () => {
        const term = searchInput.value.toLowerCase();
        const items = document.querySelectorAll('.task-item');
        items.forEach(task => {
            const taskText = task.querySelector('span').textContent.toLowerCase();
            task.style.display = taskText.includes(term) ? 'flex' : 'none';
        });
    });
}*/

// Selección de elementos
const taskInput = document.getElementById('task-input');
const prioritySelect = document.getElementById('priority-select');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');
const sortSelect = document.getElementById('sort-select');
const progressBar = document.getElementById('progress-bar');
const statsDone = document.getElementById('stats-done');
const themeToggle = document.getElementById('theme-toggle');

// Estado de la aplicación
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Guardar y Actualizar
const saveTasks = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
    updateStats();
};

const updateStats = () => {
    const completed = tasks.filter(t => t.completed).length;
    const progress = tasks.length === 0 ? 0 : (completed / tasks.length) * 100;
    progressBar.style.width = `${progress}%`;
    statsDone.innerText = completed;
};

// Renderizado con Filtros y Ordenación
const renderTasks = () => {
    let sortedTasks = [...tasks];
    const sortBy = sortSelect.value;

    // Lógica de Ordenación
    if (sortBy === 'alpha') {
        sortedTasks.sort((a, b) => a.text.localeCompare(b.text));
    } else if (sortBy === 'priority') {
        const levels = { high: 1, medium: 2, low: 3 };
        sortedTasks.sort((a, b) => levels[a.priority] - levels[b.priority]);
    } else if (sortBy === 'newest') {
        sortedTasks.sort((a, b) => b.id - a.id);
    }

    taskList.innerHTML = '';
    sortedTasks.forEach(task => {
        const li = document.createElement('li');
        li.className = `task-item ${task.completed ? 'completed' : ''} priority-${task.priority}`;
        li.innerHTML = `
            <div style="display:flex; align-items:center; gap:10px;">
                <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleTask(${task.id})">
                <span class="priority-label">${task.priority.toUpperCase()}</span>
                <span>${task.text}</span>
            </div>
            <button onclick="deleteTask(${task.id})" style="border:none; background:none; cursor:pointer;">🗑️</button>
        `;
        taskList.appendChild(li);
    });
};

// Acciones
const addTask = () => {
    const text = taskInput.value.trim();
    if (!text) return;
    tasks.push({ id: Date.now(), text, priority: prioritySelect.value, completed: false });
    taskInput.value = '';
    saveTasks();
};

const toggleTask = (id) => {
    tasks = tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t);
    saveTasks();
};

const deleteTask = (id) => {
    tasks = tasks.filter(t => t.id !== id);
    saveTasks();
};

// Modo Oscuro
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Eventos
addBtn.addEventListener('click', addTask);
sortSelect.addEventListener('change', renderTasks);
taskInput.addEventListener('keypress', (e) => e.key === 'Enter' && addTask());

// Inicio
renderTasks();
updateStats();