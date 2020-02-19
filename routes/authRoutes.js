const express = require('express');
const router = express.Router();

const { registerValidation, loginValidation } = require('../validators');
const { register, login } = require('../controllers/authController');

router.post('/register', registerValidation(), register);

router.post('/login', loginValidation(), login);

module.exports = router;
