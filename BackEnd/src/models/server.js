const express = require("express");
const cors = require("cors");
const { dbConnection } = require("../database/config");

class Server {
  constructor() {
    this.app = express();
    this.usersPath = "/users";
    this.moviesPath = "/movies";
    this.authPath = "/auth";
    this.favoriteMovies = "/favoriteMovies";

    this.connectDB();

    this.middlewares();

    this.routes();
  }

  async connectDB() {
    await dbConnection();
  }

  middlewares() {

    this.app.use(cors());

    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.authPath, require("../routes/auth"));
    this.app.use(this.moviesPath, require("../routes/movies"));
    this.app.use(this.usersPath, require("../routes/users"));
    this.app.use(this.favoriteMovies, require("../routes/favoriteMovies"));
  }

  listen() {
    this.app.listen(8080, () => {
      console.log("Server running in port 8080");
    });
  }
}

module.exports = Server;
