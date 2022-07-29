require("dotenv").config();
const boom = require("@hapi/boom");

const { successResponse, errorResponse } = require("../utils/responses");
const { getMovieData, listMovies } = require("../services/movies");
const { getApiData } = require("../helpers/api");

const base_url = "https://api.themoviedb.org/3/";
const access_api = `?api_key=${process.env.API_KEY}`;

const getMovies = async (req, res) => {
  api_url = `${base_url}movie/popular${access_api}`;

  try {
    const response = await getApiData(api_url);
    const movies = await listMovies(response.data.results);

    successResponse(req, res, movies);
  } catch (error) {
    errorResponse(req, res, error);
  }
};

const getMovieDetail = async (req, res) => {
  movie_id = req.params.id;
  api_url = `${base_url}movie/${movie_id}${access_api}`;

  try {
    const response = await getApiData(api_url);

    const movie = await getMovieData(response.data);

    successResponse(req, res, movie);
  } catch (error) {
    errorResponse(req, res, boom.notFound("Movie not found"));
  }
};

const searchMovie = async (req, res) => {
  api_url = `${base_url}search/movie/${access_api}&${req._parsedUrl.query}`;

  try {
    const response = await getApiData(api_url);

    const movies = await listMovies(response.data.results);
    response.data.results = movies;

    successResponse(req, res, response.data);
  } catch (error) {
    errorResponse(req, res, error);
  }
};

const getGenres = async (req, res) => {
  api_url = `${base_url}genre/movie/list${access_api}`;

  try {
    const response = await getApiData(api_url);
    successResponse(req, res, response.data.genres);
  } catch (error) {
    errorResponse(req, res, error);
  }
};

module.exports = {
  getMovies,
  getMovieDetail,
  searchMovie,
  getGenres,
};
