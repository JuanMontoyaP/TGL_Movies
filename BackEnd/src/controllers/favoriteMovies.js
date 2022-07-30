const { successResponse, errorResponse } = require("../utils/responses");

const {
  addMovieToUser,
  getFavoriteMoviesDetail,
} = require("../services/favoriteMovies");

const getFavoriteMovies = async (req, res) => {
  const userId = req.params.id;

  try {
    const movies = await getFavoriteMoviesDetail(userId);
    successResponse(req, res, movies);
  } catch (error) {
    errorResponse(req, res, error);
  }
};

const addFavoriteMovies = async (req, res) => {
  const userId = req.params.id;
  const movieId = req.query.movie_id;

  // fixme: null values

  try {
    const listFavorites = await addMovieToUser(userId, movieId);
    successResponse(req, res, listFavorites);
  } catch (error) {
    errorResponse(req, res, error);
  }
};

module.exports = { getFavoriteMovies, addFavoriteMovies };
