const express = require('express');

const { createSchedule, getSchedule } = require('../controllers/MealScheduleController');

const router = express.Router();

router.post('/', createSchedule);
router.get('/users/:userId', getSchedule);

module.exports = router;