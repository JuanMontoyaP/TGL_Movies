const { successResponse, errorResponse } = require("../utils/responses");

const {
  addMovieToUser,
  getFavoriteMoviesDetail,
  deleteMovieToUser,
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

const addFavoriteMovie = async (req, res) => {
  const userId = req.params.id;
  const movieId = req.query.movie_id;

  try {
    const listFavorites = await addMovieToUser(userId, movieId);
    successResponse(req, res, listFavorites);
  } catch (error) {
    errorResponse(req, res, error);
  }
};

const deleteFavoriteMovie = async (req, res) => {
  try {
    const userId = req.params.id;
    const movieId = parseInt(req.query.movie_id);

    const deletedMovie = await deleteMovieToUser(userId, movieId);
    successResponse(req, res, deletedMovie);
  } catch (error) {
    errorResponse(req, res, error);
  }
};

module.exports = { getFavoriteMovies, addFavoriteMovie, deleteFavoriteMovie };
