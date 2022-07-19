const { Router } = require("express");
const { getMovies, getMovieDetail } = require("../controllers/movies");

const router = Router();

router.get("/popular", getMovies);

router.get("/detail/:id", getMovieDetail);

module.exports = router;
