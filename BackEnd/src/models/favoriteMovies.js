const { Schema, model } = require("mongoose");

const FavoriteMoviesSchema = Schema({
  user_id: {
    type: String,
    unique: true,
    require: [true, "User_id is required"],
  },
  favoriteMovies: [Number],
});

module.exports = model("FavoriteMovies", FavoriteMoviesSchema);
