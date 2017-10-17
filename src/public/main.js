'use strict';

window.addEventListener( 'load', e => {
    const s = new Socket( 'my-room' )

    s.on( 'test', data => console.log( data ) )

    s.emit( 'test', { msg: 'hello SAS' } )
} )
