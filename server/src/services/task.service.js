let tasks = []; //base de datos temporal

const getAll = () => tasks;

const create = (title) => {
    const newTask = { id: Date.now().toString(), title, completed: false };
    tasks.push(newTask);
    return newTask;
};

const remove = (id) => {
    tasks = tasks.filter(t => t.id !== id);
    return true;
};

module.exports = { getAll, create, remove };