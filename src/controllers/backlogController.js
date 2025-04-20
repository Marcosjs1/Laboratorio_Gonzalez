const express = require('express')
const router = express.Router()
const Backlog = require('../models/Backlog')
const Tarea = require ('../models/Task')

const getBacklog = async (req, res) => {
    try {
        const backlogs = await Backlog.find().populate('tareas');
        res.json(backlogs);
    } catch (error) {
        console.error('Error al obtener el backlog:', error.message);
        res.status(500).json({ mensaje: 'Error del servidor' });
    }
};



const putBacklog = async (req, res) => {
    const { id } = req.params;
    const { tareas } = req.body; 

    try {
        const backlog = await Backlog.findById(id);

        if (!backlog) {
            return res.status(404).json({ mensaje: 'Backlog no encontrado' });
        }

        
        tareas.forEach(tareaId => {
            if (!backlog.tareas.includes(tareaId)) {
                backlog.tareas.push(tareaId);
            }
        });

        const backlogActualizado = await backlog.save();
        const backlogConTareas = await backlogActualizado.populate('tareas');

        res.json(backlogConTareas);
    } catch (error) {
        console.error('Error al actualizar el backlog:', error.message);
        res.status(500).json({ mensaje: 'Error del servidor' });
    }
};
module.exports = {getBacklog,putBacklog};