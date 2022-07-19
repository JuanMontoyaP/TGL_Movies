const { Router } = require("express");
const { getMovies } = require("../controllers/movies");

const router = Router();

router.get("/popular", getMovies);

module.exports = router;
