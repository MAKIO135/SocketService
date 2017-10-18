window.addEventListener( 'load', e => {
    SocketService.init( 'my-awesome-room', socket => {
        console.log( socket );
        socket.emit('join-room', 'my-awesome-room' );
        socket.on( 'my-event', data => console.log( data ) )

        socket.on( 'room-joined', room => {
            console.log( `socket joined ${ room }` )

            socket.emit( 'my-event', { msg: `hello from ${ window.location }` } )
        } )
    } )
} )
