window.addEventListener( 'load', e => {
    SocketService.init( 'my-awesome-room', socket => {
        socket.on( 'my-event', data => console.log( data ) )

        socket.on( 'room-joined', room => {
            console.log( `socket joined ${ room }` )

            socket.emit( 'my-event', { msg: `hello from ${ window.location }` } )
        } )
    } )
} )
