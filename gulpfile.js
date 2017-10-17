const gulp = require( 'gulp' ),
    server = require( 'gulp-develop-server' )
    browserify = require( 'browserify' ),
    babelify = require( 'babelify' ),
    source = require( 'vinyl-source-stream' ),
    buffer = require( 'vinyl-buffer' ),
    envify = require( 'envify' ),
    livereload = require( 'gulp-livereload' );

gulp.task( 'server:start', () => {
    server.listen( { path: './src/index.js' }, livereload.listen );
} );

gulp.task( 'watch', [ 'server:start' ], () => {
    livereload.listen();

    const restartServer = file => {
        server.changed( error => {
            if( ! error ) livereload.changed( file.path );
        } );
    }
    gulp.watch( [ './src/*.js' ] ).on( 'change', restartServer );

    const restartClient = file => {
        livereload.changed( file.path );
    }
    gulp.watch( [ './src/public/**/*.*', '!./src/public/**/*.scss' ] ).on( 'change', restartClient );
} );

// gulp.task( 'client', () => {
//     return browserify( {
//             entries: './src/js/main.js',
//             debug: true
//         } )
//         .on('error', function( err ){
//             console.log( err );
//         } )
//         .transform( 'babelify', {
//             presets: [ 'es2015' ]
//         } )
//         .transform( envify )
//         .bundle()
//         .pipe( source( 'bundle.js' ) )
//         .pipe( buffer() )
//         .pipe( gulp.dest( './src/public/dist' ) )
//         .pipe( livereload() )
// } )
