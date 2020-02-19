const express = require('express');
const router = express.Router();

const { registerValidation } = require('../validators');
const { register, login } = require('../controllers/authController');

router.post('/register', registerValidation(), register);

router.post('/login', login);

module.exports = router;
