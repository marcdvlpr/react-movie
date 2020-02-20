const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const { updateUserValidation } = require('../validators');
const { getUser, updateUser } = require('../controllers/userControllers');

router.get('/getUser', auth, getUser);

router.patch('/updateUser', auth, updateUserValidation(), updateUser);

module.exports = router;
