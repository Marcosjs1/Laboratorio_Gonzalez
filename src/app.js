const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();


const tareaRoutes = require('../src/routes/task');
const backlogRoutes = require('../src/routes/backlog');
const sprintRoutes = require('../src/routes/sprint');


const app = express();
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URL, {
    dbName: process.env.MONGO_DB_NAME
})
.then(() => {
    console.log('✅ Conectado a MongoDB');
})
.catch((err) => {
    console.log('❌ Error al conectar a MongoDB:', err.message);
});

app.use('/tareas', tareaRoutes);
app.use('/backlog', backlogRoutes);
app.use('/sprints', sprintRoutes);


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`🚀 Servidor corriendo en puerto ${port}`);
});