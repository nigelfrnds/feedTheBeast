const express = require('express');

const MealController = require('../controllers/MealController');

const router = express.Router();

router.get('/:calories', MealController.getMeal);

module.exports = router;