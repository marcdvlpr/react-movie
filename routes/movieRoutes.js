const express = require('express');
const router = express.Router();

const { getPopularMovies, getMovieInfo, getMovieCredits } = require('../controllers/movieController');

router.get('/', getPopularMovies);

router.get('/:movie_id', getMovieInfo);

router.get('/credits/:movie_id', getMovieCredits)

module.exports = router;
