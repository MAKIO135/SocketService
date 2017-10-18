'use strict';

const express = require( 'express' );
const app = express();
const server = require( 'http' ).Server( app );
const io = require( 'socket.io' )( server );

// Server
server.listen( process.env.PORT || 80 );
app.use( express.static( __dirname + '/public' ) );
app.get( '/', ( req, res ) => {
    res.sendfile( 'index.html' );
} );

// Sockets.io communication
io.on( 'connection' , socket => {
    console.log( 'connection: ' + socket.id )

    socket.on( 'join-room', room => {
        console.log( 'join-room: ' + room )
        socket.join( room, () =>{
            console.log( 'room-joined: ' + room )
            socket.emit( 'room-joined', room )
        } )
    } )

    socket.on( 'msg', msg => {
        console.log( 'msg' )
        io.to( msg.room ).emit( msg.event, msg.data )
	} )
} )

setInterval( () => {
    console.log( `connected sockets: ${ Object.keys( io.sockets.connected ).length }` )
}, 10000 )
