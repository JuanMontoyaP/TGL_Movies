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

    //Connect to DB
    this.connectDB();

    //Middlewares
    this.middlewares();

    // Rutas de la app
    this.routes();
  }

  async connectDB() {
    await dbConnection();
  }

  middlewares() {
    //cors
    this.app.use(cors());

    //CORS
    this.app.use(cors());

    //Lectura y parseo del body
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
