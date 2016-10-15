<?php


use {{ template_slug }}\Actions;

spl_autoload_register( function ( $class ) {
	$base = explode( '\\', $class );
	if ( '{{ template_slug }}' === $base[0] ) {
		$file = __DIR__ . '/' . strtolower( str_replace( [ '\\' ], DIRECTORY_SEPARATOR, $class ) . '.php' );
		if ( file_exists( $file ) ) {
			require $file;
		} else {
			die( sprintf( 'File %s not found', $file ) );
		}
	}

} );

add_action( 'init', function () {
	$actions = new Actions;
	$actions->init();

} );