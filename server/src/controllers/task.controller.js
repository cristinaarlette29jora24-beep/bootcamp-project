const taskService = require('../services/task.service');

const getTasks = (req, res) => {
    res.json(taskService.getAll());
};

const createTask = (req, res) => {
    // Extraemos los datos del cuerpo de la petición (Fase B)
    const { title, priority } = req.body; 
    
    // Validación defensiva en la frontera de red
    if (!title) return res.status(400).json({ error: "El título es obligatorio" });
    
    // Pasamos el objeto al servicio (corrigiendo el error de enviar solo 'title')
    const newTask = taskService.create({ title, priority: priority || 'low' });
    res.status(201).json(newTask);
};

// Nueva función para borrar (necesaria para conectar con el frontend)
const deleteTask = (req, res) => {
    const { id } = req.params;
    const deleted = taskService.remove(id);
    
    if (!deleted) return res.status(404).json({ error: "Tarea no encontrada" });
    
    res.status(204).send(); // 204 No Content: éxito total sin devolver cuerpo
};

module.exports = { getTasks, createTask, deleteTask };