const express = require('express');
const { registerUser, loginUser, getUser } = require('../controllers/UserController');

const authenticate = require('../middlewares/authenticate');

const router = express.Router();

router.post('/register', registerUser);

router.post('/login', loginUser);

router.get('/token-login', authenticate, getUser);

module.exports = router;