const axios = require('axios');
const { API_URL, API_KEY } = require('../config');

exports.getPopularMovies = async (req, res) => {
  const { page, language } = req.query;

  try {
    const { data } = await axios.get(
      `${API_URL}movie/popular?api_key=${API_KEY}&language=${language}&page=${page}`
    );

    res.json(data);
  } catch (err) {
    console.error(err.response.data);
    res.status(500).send('Server error');
  }
};
