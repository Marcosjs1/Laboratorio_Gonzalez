    const mongoose = require('mongoose')

    const TaskSchema = new mongoose.Schema (
        {
            titulo: { type: String, required: true },
            descripcion: { type: String, required: false },
            estado: { type: String, enum: ["Pendiente", "En proceso", "Completado"], default: "Pendiente" },
            fechaLimite: { type: String }
        }
    )

module.exports = mongoose.model('Tarea',TaskSchema)