const { Router } = require("express");

const { validateData } = require("../middlewares/validateData");
const { getMovies, getMovieDetail } = require("../controllers/movies");
const { productDetailSchema } = require("../utils/schemas/movie");

const router = Router();

router.get("/popular", getMovies);

router.get(
  "/detail/:id",
  validateData(productDetailSchema, "params"),
  getMovieDetail
);

module.exports = router;
