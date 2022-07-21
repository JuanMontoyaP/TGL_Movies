require("dotenv").config();
const axios = require("axios");
const boom = require("@hapi/boom");

const { successResponse, errorResponse } = require("../utils/responses");
const { getMovieData } = require("../services/movies");

const base_url = "https://api.themoviedb.org/3/";
const access_api = `?api_key=${process.env.API_KEY}`;

const getMovies = async (req, res) => {
  api_url = `${base_url}movie/popular${access_api}`;

  try {
    const response = await axios.get(api_url);

    if (!response.data.results) {
      throw boom.internal("Error");
    }

    const movies = [];
    for (let movie of response.data.results) {
      movies.push(await getMovieData(movie));
    }

    successResponse(req, res, movies);
  } catch (error) {
    errorResponse(req, res, error);
  }
};

const getMovieDetail = async (req, res) => {
  movie_id = req.params.id;
  api_url = `${base_url}movie/${movie_id}${access_api}  `;

  try {
    const response = await axios.get(api_url);

    if (!response.data) {
      throw boom.notFound("No movie found");
    }

    const movie = await getMovieData(response.data);

    successResponse(req, res, movie);
  } catch (error) {
    errorResponse(req, res, error);
  }
};

module.exports = {
  getMovies,
  getMovieDetail,
};
