const express = require('express');

const MealController = require('../controllers/MealController');

const authenticate = require('../middlewares/authenticate');

const router = express.Router();

router.get('/:calories', authenticate, MealController.getMeal);

module.exports = router;