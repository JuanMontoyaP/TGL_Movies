const { Router } = require("express");
const { check } = require("express-validator");

const { userExistById } = require("../helpers/db-validators");
const { validateInputs } = require("../middlewares/validate-inputs");

const {
  getFavoriteMovies,
  addFavoriteMovies,
} = require("../controllers/favoriteMovies");

const router = Router();

router.get("/", getFavoriteMovies);

router.post(
  "/:id",
  [
    check("id", "Is not a valid ID").isMongoId(),
    check("id").custom(userExistById),
    validateInputs,
  ],
  addFavoriteMovies
);

module.exports = router;
