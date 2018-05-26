const express = require('express');

const { createSchedule, getSchedule } = require('../controllers/MealScheduleController');
const authenticate = require('../middlewares/authenticate');

const router = express.Router();

router.post('/', authenticate, createSchedule);
router.get('/users/:userId', authenticate, getSchedule);

module.exports = router;