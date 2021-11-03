class Sockets {
    constructor(io) {
        this.io = io;
        this.socketsEvents();
    }

    socketsEvents () {
        this.io.on('connection', (socket) => { 
            // socket.emit('mensaje-bienvenia', 'Bienvenido al server')
            socket.on('message-to-server', (data) => {
                this.io.emit('message-from-server', data)
            })
         });
    }
}

module.exports = Sockets;