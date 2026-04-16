let tasks = []; // Base de datos temporal en memoria (Fase B)

const getAll = () => tasks;

const create = (data) => {
    // CAMBIO: Ahora extraemos title y priority del objeto 'data'
    const newTask = { 
        id: Date.now().toString(), 
        title: data.title, 
        priority: data.priority || 'low', // Si no llega prioridad, ponemos 'low' por defecto
        completed: false 
    };
    tasks.push(newTask);
    return newTask;
};

const remove = (id) => {
    const initialLength = tasks.length;
    tasks = tasks.filter(t => t.id !== id);
    // CAMBIO: Devolvemos true solo si realmente se borró algo (mejor lógica)
    return tasks.length < initialLength;
};

module.exports = { getAll, create, remove };