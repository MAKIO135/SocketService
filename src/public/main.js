SocketService.init( 'my-room', socket => {
    socket.on( 'test', data => console.log( data ) )
    socket.on( 'test2', data => console.log( data ) )

    socket.on( 'room-joined', room => {
        console.log( `socket joined ${ room }` )

        socket.emit( 'test', { msg: 'hello test1' } )
        socket.emit( 'test2', { msg: 'hello test2' } )
    } )
} )
