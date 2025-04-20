const mongoose = require('mongoose') 

const SprintSchema = new mongoose.Schema(
    {
        fechaInicio: {type:String, require: true},
        fechaCierre: {type:String, require: true},
        tareas: [{type: mongoose.Schema.Types.ObjectId, ref: `Tarea`}]
        
    }
)

module.exports = mongoose.model('Sprint', SprintSchema)