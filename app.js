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

// 📝 Renderizar Tareas
function renderTasks() {
    taskList.innerHTML = '';
    
    const filtered = tasks.filter(t => {
        if (currentFilter === 'pending') return !t.completed;
        if (currentFilter === 'completed') return t.completed;
        return true;
    });

    filtered.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = `task-item priority-${task.priority} ${task.completed ? 'completed' : ''}`;
        li.innerHTML = `
            <div style="display:flex; align-items:center; gap:10px;">
                <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleTask(${index})">
                <span>${task.title}</span>
            </div>
            <button onclick="deleteTask(${index})" style="background:none; border:none; cursor:pointer;">🗑️</button>
        `;
        taskList.appendChild(li);
    });
    updateStats();
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
    tasks[index].completed = !tasks[index].completed;
    save();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    save();
}

function updateStats() {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    const percent = total === 0 ? 0 : (completed / total) * 100;

    document.getElementById('total-tasks').innerText = total;
    document.getElementById('completed-tasks').innerText = completed;
    document.getElementById('progress-bar').style.width = percent + '%';
}

function save() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

// Carga inicial
renderTasks();