const { Router } = require("express");
const { check } = require("express-validator");

const {
  userExistById,
  userFavoritesExistById,
} = require("../helpers/db-validators");
const { validateInputs } = require("../middlewares/validate-inputs");

const {
  getFavoriteMovies,
  addFavoriteMovie,
  deleteFavoriteMovie,
} = require("../controllers/favoriteMovies");

const router = Router();

router.get(
  "/:id",
  [
    check("id", "Is not a valid ID").isMongoId(),
    check("id").custom(userExistById),
    check("id").custom(userFavoritesExistById),
    validateInputs,
  ],
  getFavoriteMovies
);

router.post(
  "/:id",
  [
    check("movie_id", "Is empty").notEmpty(),
    check("id", "Is not a valid ID").isMongoId(),
    check("id").custom(userExistById),
    validateInputs,
  ],
  addFavoriteMovie
);

router.delete(
  "/:id",
  [
    check("movie_id", "Is empty").notEmpty(),
    check("id", "Is not a valid ID").isMongoId(),
    check("id").custom(userExistById),
    validateInputs,
  ],
  deleteFavoriteMovie
);

module.exports = router;
