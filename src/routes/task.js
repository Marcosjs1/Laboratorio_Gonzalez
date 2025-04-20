const express = require('express');
const router = express.Router();
const {
    getTareas,
    getTareaPorId,
    putTarea
} = require('../controllers/tareaController');

router.get('/tareas', getTareas);
router.get('/tareas/:id', getTareaPorId);
router.put('/tareas', putTarea);

module.exports = router;