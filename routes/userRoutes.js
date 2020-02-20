const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const { getUser } = require('../controllers/userControllers');

router.get('/me', auth, getUser);

module.exports = router;
