const express = require( 'express' );
const app = express();
const server = require( 'http' ).Server( app );
const io = require( 'socket.io' )( server );

server.listen( process.env.port || 80 );

app.use( express.static( __dirname + '/public' ) );
app.get( '/', ( req, res ) => {
    res.sendfile( 'index.html' );
} );


// Sockets.io communication
const sockets = []

io.on( 'connection' , socket {
    console.log( socket.id )
	sockets.push( socket )

	io.emit( 'connected', { nbUsers: sockets.length } )

	socket.on( 'disconnect', () => {
		sockets = sockets.filter( s => {
            return s.id !== socket.id
        } )
	} )

    socket.on( 'username', username => {
        socket.username = username
    } )

    socket.on( 'msg', msg => {
        io.emit( 'newMsg', { username: socket.username, msg } )
	} )
} )
