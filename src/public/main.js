window.addEventListener( 'load', e => {
    const s = new SocketService( 'my-room' )

    s.on( 'test', data => console.log( data ) )
    s.emit( 'test', { msg: 'hello SocketService' } )

    s.on( 'test2', data => console.log( data ) )
    s.emit( 'test2', { msg: 'hello SocketService 2' } )
} )
