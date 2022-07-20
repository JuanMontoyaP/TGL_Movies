const express = require('express')
const { dbConnection } = require('../database/config');

class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT;
        this.usuariosPath = '/users'

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
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running in port', this.port)
        })
    }
}

module.exports = Server