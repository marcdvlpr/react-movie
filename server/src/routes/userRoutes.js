const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const { updateUserValidation, updatePasswordValidation } = require('../validators');
const { getUser, updateUser, updatePassword, deleteUser } = require('../controllers/userController');

router.get('/getUser', auth, getUser);

router.patch('/updateUser', auth, updateUserValidation(), updateUser);

router.patch('/updatePassword', auth, updatePasswordValidation(), updatePassword);

router.delete('/deleteUser', auth, deleteUser);

module.exports = router;
