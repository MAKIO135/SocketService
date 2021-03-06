'use strict'

let SocketService = {}
SocketService.init = ( room, callback ) => {
    class Socket {
        constructor( room ) {
            this.room = room
            this.socket = io( 'https://socketservice.herokuapp.com/' )
            this.socket.on( 'connected', () => this.socket.emit( 'join-room', this.room ) )
        }

        emit( event, data ) {
            this.socket.emit( 'msg', { room: this.room, event, data } )
        }

        on( event, f ) {
            this.socket.on( event, f )
        }
    }

    const ioScript = document.createElement( 'script' )
    ioScript.src = 'https://socketservice.herokuapp.com/socket.io/socket.io.js'
    ioScript.addEventListener( 'load', e => {
        callback( new Socket( room ) )
    } )
    document.body.appendChild( ioScript )
}
