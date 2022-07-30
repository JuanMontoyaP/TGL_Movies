const boom = require("@hapi/boom");

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

module.exports = { addMovieToUser };
