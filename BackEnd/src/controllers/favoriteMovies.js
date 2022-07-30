const { successResponse, errorResponse } = require("../utils/responses");

const { addMovieToUser } = require("../services/favoriteMovies");

const FavoriteMovies = require("../models/favoriteMovies");

const getFavoriteMovies = async (req, res) => {
  const movies = await Promise.resolve(FavoriteMovies.find({}));

  res.json(movies);
};

const addFavoriteMovies = async (req, res) => {
  const userId = req.params.id;
  const movieId = req.query.movie_id;

  try {
    const listFavorites = await addMovieToUser(userId, movieId);
    successResponse(req, res, listFavorites);
  } catch (error) {
    errorResponse(req, res, error);
  }
};

module.exports = { getFavoriteMovies, addFavoriteMovies };
