'use strict';

class Socket{
    constructor( room ) {
        this.room = room
        this.socket = io()
        this.socket.emit( 'join-room', room )
    }

    emit( event, data ) {
        this.socket.emit( 'msg', { this.room, event, data }  )
    }

    on( event, f ) {
        this.socket.on( event, f )
    }
}


window.addEventListener( 'load', e => {
    const s = new Socket( 'my-room' )
} )
