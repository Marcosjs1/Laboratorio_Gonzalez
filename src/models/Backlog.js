const mongoose = require('mongoose')

const BacklogSchema = new mongoose.Schema(
    {
        tareas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tarea' }]
    }
)

module.exports = mongoose.model('Backlog', BacklogSchema)