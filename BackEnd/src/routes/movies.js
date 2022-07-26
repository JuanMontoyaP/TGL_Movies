const { Router } = require("express");

const { validateData } = require("../middlewares/validateData");
const {
  getMovies,
  getMovieDetail,
  searchMovie,
  getGenres,
} = require("../controllers/movies");

const {
  movieDetailSchema,
  searchMovieSchema,
} = require("../utils/schemas/movie");

const router = Router();

router.get("/popular", getMovies);

router.get(
  "/detail/:id",
  validateData(movieDetailSchema, "params"),
  getMovieDetail
);

router.get("/", validateData(searchMovieSchema, "query"), searchMovie);

router.get("/genre", getGenres);

module.exports = router;
