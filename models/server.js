const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');
const Sockets = require('./sockets');
const cors = require('cors');
 
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        //HttpServer
        this.server = http.createServer(this.app);

        //Configuraciones del socket
        this.io = socketIO(this.server, {
            /* Configuraciones */
        });
    }

    configurarSockets() {
        new Sockets(this.io);
    }

    middlewares() {
        this.app.use(express.static( path.resolve(__dirname, '../public')));
        this.app.use(cors());
    }

    execute() {
        this.middlewares();
        this.configurarSockets();
        this.server.listen(this.port, () => {
            console.log("Aplicacion corriendo")
        })
    }
}

module.exports = Server;