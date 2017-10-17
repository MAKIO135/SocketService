'use strict';

class SocketService {
    constructor( room ) {
        this.room = room
        this.connected = false
        this.socket = io()
        this.socket.on( 'connected', () =>  {
            this.connected = true
            this.socket.emit( 'join-room', room )
        } )
    }

    emit( event, data ) {
        this.socket.emit( 'msg', { room: this.room, event, data } )
    }

    on( event, f ) {
        this.socket.on( event, f )
    }
}
