const taskService = require('../services/task.service');

const getTasks = (req, res) => {
    res.json(taskService.getAll());
};

const createTask = (req, res) => {
    const { title, priority } = req.body;
    if (!title) return res.status(400).json({ error: "El título es obligatorio" });
    const newTask = taskService.create({ title, priority: priority || 'low' });
    res.status(201).json(newTask);
};

const deleteTask = (req, res) => {
    const { id } = req.params;
    const deleted = taskService.remove(id);
    if (!deleted) return res.status(404).json({ error: "Tarea no encontrada" });
    res.status(204).send();
};

const toggleTask = (req, res) => {
    const { id } = req.params;
    const { completed } = req.body;
    if (typeof completed !== 'boolean') {
        return res.status(400).json({ error: "El campo completed debe ser true o false" });
    }
    const updated = taskService.toggle(id, completed);
    if (!updated) return res.status(404).json({ error: "Tarea no encontrada" });
    res.json(updated);
};

module.exports = { getTasks, createTask, deleteTask, toggleTask };