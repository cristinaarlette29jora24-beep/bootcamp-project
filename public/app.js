// --- CONFIGURACIÓN Y SELECCIÓN DE ELEMENTOS ---
const API_URL = '/api/v1/tasks'; 

const taskInput = document.getElementById('task-input');
const prioritySelect = document.getElementById('priority-select');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');
const sortSelect = document.getElementById('sort-select');
const progressBar = document.getElementById('progress-bar');
const statsDone = document.getElementById('stats-done');
const themeToggle = document.getElementById('theme-toggle');

// Estado de la aplicación
let tasks = [];

// --- CAPA DE RED (Fase D: Peticiones al Servidor) ---

const fetchTasks = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Error al obtener tareas del servidor');
        tasks = await response.json();
        renderTasks(); 
        updateStats();
    } catch (error) {
        console.error("Error de carga:", error);
    }
};

const addTask = async () => {
    const text = taskInput.value.trim();
    if (!text) return;

    const newTask = { 
        title: text, 
        priority: prioritySelect.value, 
        completed: false 
    };

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newTask)
        });

        if (response.status === 201) {
            taskInput.value = '';
            await fetchTasks(); 
        }
    } catch (error) {
        console.error("Error al añadir tarea:", error);
    }
};

const toggleTask = async (id) => {
    const task = tasks.find(t => t.id === id);
    if (!task) return;

    try {
        await fetch(`${API_URL}/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ completed: !task.completed })
        });
        await fetchTasks();
    } catch (error) {
        console.error("Error al actualizar tarea:", error);
    }
};

const deleteTask = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
        if (response.ok || response.status === 204) {
            await fetchTasks();
        }
    } catch (error) {
        console.error("Error al eliminar tarea:", error);
    }
};

// --- LÓGICA DE INTERFAZ ---

const updateStats = () => {
    const completed = tasks.filter(t => t.completed).length;
    const progress = tasks.length === 0 ? 0 : (completed / tasks.length) * 100;
    progressBar.style.width = `${progress}%`;
    statsDone.innerText = completed;
};

const renderTasks = () => {
    let sortedTasks = [...tasks];
    const sortBy = sortSelect.value;

    if (sortBy === 'alpha') {
        sortedTasks.sort((a, b) => (a.title || a.text || "").localeCompare(b.title || b.text || ""));
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
        
        // CORRECCIÓN: Se añaden comillas simples '${task.id}' para que el ID funcione como string
        li.innerHTML = `
            <div style="display:flex; align-items:center; gap:10px;">
                <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleTask('${task.id}')">
                <span class="priority-label">${task.priority.toUpperCase()}</span>
                <span>${task.title || task.text}</span>
            </div>
            <button onclick="deleteTask('${task.id}')" style="border:none; background:none; cursor:pointer;">🗑️</button>
        `;
        taskList.appendChild(li);
    });
};

// Modo Oscuro
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Eventos
addBtn.addEventListener('click', addTask);
sortSelect.addEventListener('change', renderTasks);
taskInput.addEventListener('keypress', (e) => e.key === 'Enter' && addTask());

// Inicio de la aplicación
fetchTasks();