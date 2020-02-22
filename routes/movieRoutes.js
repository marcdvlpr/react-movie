const express = require('express');
const router = express.Router();

const { getPopularMovies, getMovieInfo } = require('../controllers/movieController');

router.get('/', getPopularMovies);

router.get('/:movie_id', getMovieInfo);

module.exports = router;
