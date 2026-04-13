let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
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
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
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
}