let tasks = [];

const getAll = () => tasks;

const create = (data) => {
    const newTask = {
        id: Date.now().toString(),
        title: data.title,
        priority: data.priority || 'low',
        completed: false
    };
    tasks.push(newTask);
    return newTask;
};

const remove = (id) => {
    const initialLength = tasks.length;
    tasks = tasks.filter(t => t.id !== id);
    return tasks.length < initialLength;
};

const toggle = (id, completed) => {
    const task = tasks.find(t => t.id === id);
    if (!task) return null;
    task.completed = completed;
    return task;
};

module.exports = { getAll, create, remove, toggle };