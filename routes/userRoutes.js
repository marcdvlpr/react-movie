const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const { getUser, updateUser } = require('../controllers/userControllers');

router.get('/getUser', auth, getUser);

router.patch('/updateUser', auth, updateUser)

module.exports = router;
