const express = require('express');
const router = express.Router();

const { registerValidation } = require('../validators');
const { register } = require('../controllers/authController');

router.post('/register', registerValidation(), register);

module.exports = router;
