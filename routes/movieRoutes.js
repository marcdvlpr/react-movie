const express = require('express');
const router = express.Router();

const {
  getPopularMovies,
  getMovieInfo,
  getMovieCredits,
  searchMovie
} = require('../controllers/movieController');

router.get('/', getPopularMovies);

router.get('/:movie_id', getMovieInfo);

router.get('/:movie_id/credits', getMovieCredits);

router.get('/search/movie', searchMovie);

module.exports = router;
