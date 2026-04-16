const express = require('express');
const cors = require('cors'); // 1. Importamos el portero que acabas de instalar
const taskRoutes = require('./routes/task.routes');

const app = express();
const PORT = process.env.PORT || 3000;

// --- CONFIGURACIÓN DE MIDDLEWARES ---

app.use(cors());           // 2. Encendemos el portero (permite que la web hable con la API)
app.use(express.json());   // 3. Encendemos el traductor (permite leer el título de la tarea)

// --- RUTAS ---

app.use('/api/v1/tasks', taskRoutes);

app.get('/', (req, res) => {
    res.send('Servidor TaskFlow conectado y funcionando 🚀');
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});