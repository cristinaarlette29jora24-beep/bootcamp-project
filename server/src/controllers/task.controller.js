const taskService = require('../services/task.service');

const getTasks = (req, res) => {
    res.json(taskService.getAll());
};

const createTask = (req, res) => {
    const { title } = req.body;
    if (!title) return res.status(400).json({ error: "Falta el título" });
    
    const newTask = taskService.create(title);
    res.status(201).json(newTask);
};

module.exports = { getTasks, createTask };