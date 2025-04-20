const express = require('express');
const router = express.Router();
const { getBacklog, putBacklog } = require('../controllers/backlogController');

router.get('/backlog', getBacklog);
router.put('/backlog/:id', putBacklog);

module.exports = router;