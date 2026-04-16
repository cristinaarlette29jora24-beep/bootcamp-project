const express = require('express');
const cors = require('cors');
const taskRoutes = require('./routes/task.routes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/v1/tasks', taskRoutes);

app.listen(3000, () => console.log('🚀 Servidor en puerto 3000'));