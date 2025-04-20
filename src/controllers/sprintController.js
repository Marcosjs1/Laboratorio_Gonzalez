const Sprint = require ('../models/Sprint')


const getSprints = async (req, res) => {
    try {
        const sprints = await Sprint.find().populate('tareas')
        res.json(sprints)
    } catch (error) {
        console.error('Error al obtener los sprints:', error.message);
        res.status(500).json({ mensaje: 'Error del servidor' });
    }
}

const getSprintPorId = async (req,res) => {
    const {id} = req.params

    try {
        const sprint = await Sprint.findById().populate('tareas')

        if (!sprint) {
            return res.status(404).json({ mensaje: 'Sprint no encontrado' });
        }
        res.json(sprint);
    } catch (error) {
        console.error('Error al obtener el sprint por ID:', error.message);
        res.status(500).json({ mensaje: 'Error del servidor' });
    }
}

const putSprint = async (req,res) => {
    const {fechaInicio, fechaCierre, tareas} = req.body;

    try {
        const sprintNuevo = new Sprint({
            fechaInicio,
            fechaCierre,
            tareas: [] || tareas 
        })

        const sprintGuardado = sprintNuevo.save()

        res.status(201).json(sprintGuardado)
    } catch (error) {
        console.error('Error al crear el sprint:', error.message);
        res.status(500).json({ mensaje: 'Error del servidor' });
    }
}

module.exports = {getSprints,getSprintPorId,putSprint};