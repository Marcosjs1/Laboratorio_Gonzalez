const express = require('express');
const router = express.Router();
const {
    getSprints,
    getSprintPorId,
    putSprint
} = require('../controllers/sprintController'); // Ajustá la ruta

router.get('/sprints', getSprints);
router.get('/sprints/:id', getSprintPorId);
router.put('/sprints', putSprint);

module.exports = router;