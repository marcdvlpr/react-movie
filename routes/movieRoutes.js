const express = require('express');
const router = express.Router();

const { getPopularMovies } = require('../controllers/movieControllers');

router.get('/', getPopularMovies);

module.exports = router;
