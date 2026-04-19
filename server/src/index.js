const { PORT } = require('./config/env');
const express = require('express');
const cors = require('cors');
const taskRoutes = require('./routes/task.routes');

const app = express();

// --- MIDDLEWARES ---
app.use(cors());
app.use(express.json());

// --- RUTAS ---
app.use('/api/v1/tasks', taskRoutes);

app.get('/', (req, res) => {
    res.send('Servidor TaskFlow conectado y funcionando 🚀');
});

// --- MIDDLEWARE GLOBAL DE ERRORES (4 parámetros) ---
app.use((err, req, res, next) => {
    if (err.message === 'NOT_FOUND') {
        return res.status(404).json({ error: 'Recurso no encontrado' });
    }
    console.error(err);
    res.status(500).json({ error: 'Error interno del servidor' });
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});