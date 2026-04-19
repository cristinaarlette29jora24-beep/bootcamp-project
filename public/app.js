const API_URL = '/api/v1/tasks';

const taskInput = document.getElementById('task-input');
const prioritySelect = document.getElementById('priority-select');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');
const sortSelect = document.getElementById('sort-select');
const progressBar = document.getElementById('progress-bar');
const statsDone = document.getElementById('stats-done');
const totalTasks = document.getElementById('total-tasks');
const themeToggle = document.getElementById('theme-toggle');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');

let tasks = [];
let currentFilter = 'all';

// --- CAPA DE RED ---

const fetchTasks = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Error al obtener tareas');
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
    const total = tasks.length;
    const progress = total === 0 ? 0 : (completed / total) * 100;
    progressBar.style.width = `${progress}%`;
    statsDone.innerText = completed;
    totalTasks.innerText = total;
};

const renderTasks = () => {
    const searchText = searchInput.value.toLowerCase().trim();

    let filtered = tasks.filter(task => {
        // Filtro por estado
        if (currentFilter === 'pending') return !task.completed;
        if (currentFilter === 'completed') return task.completed;
        return true;
    }).filter(task => {
        // Filtro por búsqueda
        if (!searchText) return true;
        return (task.title || '').toLowerCase().includes(searchText);
    });

    // Ordenación
    const sortBy = sortSelect.value;
    if (sortBy === 'alpha') {
        filtered.sort((a, b) => (a.title || '').localeCompare(b.title || ''));
    } else if (sortBy === 'priority') {
        const levels = { high: 1, medium: 2, low: 3 };
        filtered.sort((a, b) => levels[a.priority] - levels[b.priority]);
    } else if (sortBy === 'newest') {
        filtered.sort((a, b) => b.id - a.id);
    }

    taskList.innerHTML = '';

    if (filtered.length === 0) {
        taskList.innerHTML = '<li style="text-align:center; padding:20px; opacity:0.5;">No hay tareas para mostrar</li>';
        return;
    }

    filtered.forEach(task => {
        const li = document.createElement('li');
        li.className = `task-item ${task.completed ? 'completed' : ''} priority-${task.priority}`;
        li.innerHTML = `
            <div style="display:flex; align-items:center; gap:10px;">
                <input type="checkbox" 
                    aria-label="Marcar tarea como completada"
                    ${task.completed ? 'checked' : ''} 
                    onchange="toggleTask('${task.id}')">
                <span class="priority-label">${task.priority.toUpperCase()}</span>
                <span>${task.title || ''}</span>
            </div>
            <button 
                onclick="deleteTask('${task.id}')" 
                aria-label="Eliminar tarea"
                style="border:none; background:none; cursor:pointer; font-size:1.1rem;">🗑️</button>
        `;
        taskList.appendChild(li);
    });
};

// --- EVENTOS ---

// Filtros
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        renderTasks();
    });
});

// Búsqueda
searchInput.addEventListener('input', renderTasks);

// Ordenación
sortSelect.addEventListener('change', renderTasks);

// Añadir tarea
addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => e.key === 'Enter' && addTask());

// Modo oscuro
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    themeToggle.textContent = isDark ? '☀️ Modo Claro' : '🌙 Modo Oscuro';
    localStorage.setItem('darkMode', isDark);
});

// Recuperar preferencia de modo oscuro
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    themeToggle.textContent = '☀️ Modo Claro';
}

// --- INICIO ---
fetchTasks();