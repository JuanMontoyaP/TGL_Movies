const express = require('express')
const { dbConnection } = require('../database/config');

class Server {

    constructor() {
        this.app = express()
        this.usuariosPath = '/users'
        this.moviesPath = "/movies";

        //Connect to DB
        this.connectDB();

        //Middlewares
        this.middlewares()

        // Rutas de la app
        this.routes()
    }

    async connectDB() {
        await dbConnection();
    }

    middlewares() {
        
        //Lectura y parseo del body
        this.app.use(express.json())
    }

    routes() {

        this.app.use(this.usuariosPath, require('../routes/users'))
        this.app.use(this.moviesPath, require("../routes/movies"));
    }

    listen() {
      this.app.listen(8080, () => {
        console.log("Server running in port 8080");
      });
    }
}

module.exports = Server;
