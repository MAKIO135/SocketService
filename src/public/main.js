SocketService.init( 'my-awesome-room', socket => {
    socket.on( 'test', data => console.log( data ) )

    socket.on( 'room-joined', room => {
        console.log( `socket joined ${ room }` )

        socket.emit( 'test', { msg: 'hello test' } )
    } )
} )
