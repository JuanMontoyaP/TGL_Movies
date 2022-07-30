const boom = require("@hapi/boom");

const { getApiData } = require("../helpers/api");
const { getMovieData, listMovies } = require("./movies");

const FavoriteMovies = require("../models/favoriteMovies");

const createUser = async (userId) => {
  const user = new FavoriteMovies({ user_id: userId });
  return user;
};

const getUser = async (userId) => {
  let user = await FavoriteMovies.findOne({ user_id: userId });

  if (!user) {
    user = await createUser(userId);
  }
  return user;
};

const addMovieToUser = async (userId, movieId) => {
  const user = await getUser(userId);

  if (user.favoriteMovies.includes(movieId)) {
    throw boom.conflict("Movie already exist in favorites");
  } else {
    user.favoriteMovies.push(movieId);
    await user.save();
  }

  return user;
};

const getFavoriteMoviesDetail = async (userId) => {
  const base_url = "https://api.themoviedb.org/3/";
  const access_api = `?api_key=${process.env.API_KEY}`;

  const user = await FavoriteMovies.findOne({ user_id: userId });

  const movies = [];

  if (user.favoriteMovies === 0) {
    throw boom.notFound("No movies found");
  }

  for (const movieId of user.favoriteMovies) {
    api_url = `${base_url}movie/${movieId}${access_api}`;
    let response = await getApiData(api_url);
    movies.push(response.data);
  }

  return await listMovies(movies);
};

module.exports = { addMovieToUser, getFavoriteMoviesDetail };
