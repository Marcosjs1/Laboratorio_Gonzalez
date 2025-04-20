const Tarea = require('../models/Task');

const getTareas = async (req, res) => {
    try {
        const tareas = await Tarea.find();
        res.json(tareas);
    } catch (error) {
        console.error('Error al obtener tareas:', error.message);
        res.status(500).json({ mensaje: 'Error del servidor' });
    }
};

const getTareaPorId = async (req, res) => {
    const { id } = req.params;

    try {
        const tarea = await Tarea.findById(id);

        if (!tarea) {
            return res.status(404).json({ mensaje: 'Tarea no encontrada' });
        }

        res.json(tarea);
    } catch (error) {
        console.error('Error al obtener tarea por ID:', error.message);
        res.status(500).json({ mensaje: 'Error del servidor' });
    }
};

const putTarea = async (req, res) => {
    const { titulo, descripcion, estado, fechaLimite } = req.body;

    try {
        const nuevaTarea = new Tarea({
            titulo,
            descripcion,
            estado,
            fechaLimite
        });

        const tareaGuardada = await nuevaTarea.save();
        res.status(201).json(tareaGuardada);
    } catch (error) {
        console.error('Error al crear tarea:', error.message);
        res.status(500).json({ mensaje: 'Error del servidor' });
    }
};

module.exports = {
    getTareas,
    getTareaPorId,
    putTarea
};