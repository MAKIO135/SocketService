'use strict';

class Socket{
    constructor( room ) {
        this.room = room
        this.socket = io()
        this.socket.on( 'connected', () => console.log( 'socket connected!' ) )
        this.socket.emit( 'join-room', room )
        this.socket.on( 'room-joined', room => console.log( `socket joined ${ room }` ) )
    }

    emit( event, data ) {
        this.socket.emit( 'msg', { room: this.room, event, data } )
    }

    on( event, f ) {
        this.socket.on( event, f )
    }
}
