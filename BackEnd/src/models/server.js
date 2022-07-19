const express = require("express");

class Server {
  constructor() {
    this.app = express();
    this.usuariosPath = "/users";
    this.moviesPath = "/movies";

    //Middlewares
    this.middlewares();

    // Rutas de la app
    this.routes();
  }

  middlewares() {}

  routes() {
    this.app.use(this.usuariosPath, require("../routes/users"));
    this.app.use(this.moviesPath, require("../routes/movies"));
  }

  listen() {
    this.app.listen(8080, () => {
      console.log("Server running in port 8080");
    });
  }
}

module.exports = Server;
