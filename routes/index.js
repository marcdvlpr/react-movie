const express = require('express');
const router = express.Router();

const authRouter = require('./authRoutes');
const userRouter = require('./userRoutes');
const movieRouter = require('./movieRoutes');

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/movies', movieRouter);

module.exports = router;
