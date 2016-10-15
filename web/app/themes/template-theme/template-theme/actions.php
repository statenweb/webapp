<?php

namespace {{ theme_slug }};

class Actions {

	public function init(){
		$this->attach_hooks();
	}


	public function attach_hooks() {
		wp_enqueue_script( 'dehart', get_template_directory_uri() . '/js/main.min.js', array( 'jquery' ), '20120206', true );
	}

}