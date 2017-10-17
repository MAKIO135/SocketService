window.addEventListener( 'load', e => {
    const s = new SocketService( 'my-room' )

    s.on( 'room-joined', room => {
        console.log( `socket joined ${ room }` )

        s.emit( 'test', { msg: 'hello SocketService' } )

        s.emit( 'test2', { msg: 'hello SocketService 2' } )
    } );
    
    s.on( 'test', data => console.log( data ) )
    s.on( 'test2', data => console.log( data ) )
} )
