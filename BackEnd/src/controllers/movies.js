require("dotenv").config();
const axios = require("axios");

const { getMovieData } = require("../services/movies");

const base_url = "https://api.themoviedb.org/3/";
const access_api = `?api_key=${process.env.API_KEY}`;

const getMovies = async (req, res) => {
  api_url = `${base_url}movie/popular${access_api}`;
  try {
    const response = await axios.get(api_url);

    const movies = [];
    for (let movie of response.data.results) {
      movies.push(await getMovieData(movie));
    }

    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({
      msg: "Internal Server Error",
    });
  }
};

module.exports = {
  getMovies,
};
