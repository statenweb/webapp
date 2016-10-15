<?php
require __DIR__ . '/application.php';


if ( ! class_exists( 'Timber' ) ) {
	add_action( 'admin_notices', function() {
			echo '<div class="error"><p>Timber not activated. Make sure you activate the plugin in <a href="' . esc_url( admin_url( 'plugins.php#timber' ) ) . '">' . esc_url( admin_url( 'plugins.php' ) ) . '</a></p></div>';
		} );
	return;
}

Timber::$dirname = array('templates', 'views');

class StarterSite extends TimberSite {

	function __construct() {
		add_theme_support( 'post-formats' );
		add_theme_support( 'post-thumbnails' );
		add_theme_support( 'menus' );
		add_filter( 'timber_context', array( $this, 'add_to_context' ) );
		add_filter( 'get_twig', array( $this, 'add_to_twig' ) );
		add_action( 'init', array( $this, 'register_post_types' ) );
		add_action( 'init', array( $this, 'register_taxonomies' ) );
		parent::__construct();
	}

	function register_post_types() {
		//this is where you can register custom post types
	}

	function register_taxonomies() {
		//this is where you can register custom taxonomies
	}

	function add_to_context( $context ) {
		$context['foo'] = 'bar';
		$context['stuff'] = 'I am a value set in your functions.php file';
		$context['notes'] = 'These values are available everytime you call Timber::get_context();';
		$context['menu'] = new TimberMenu();
		$context['site'] = $this;
		$context['social_menu']  = $this->output_social_media();
		return $context;
	}

	function myfoo( $text ) {
		$text .= ' bar!';
		return $text;
	}

	function add_to_twig( $twig ) {
		/* this is where you can add your own fuctions to twig */
		$twig->addExtension( new Twig_Extension_StringLoader() );
		$twig->addFilter('myfoo', new Twig_SimpleFilter('myfoo', array($this, 'myfoo')));
		return $twig;
	}

	function output_social_media($new_window = true, $classes = array())
	{
		$target = $class_output = '';

		if ( $new_window ) {
			$target = ' target="_BLANK" ';
		}

		$services = array(
				array(
						'service' => 'instagram',
						'class' => 'fa fa-instagram fa-stack-1x',
				),
				array(
						'service' => 'facebook',
						'class' => 'fa fa-facebook fa-stack-1x',
				),
				array(
						'service' => 'twitter',
						'class' => 'fa fa-twitter fa-stack-1x',
				),
				array(
						'service' => 'linkedin',
						'class' => 'fa fa-linkedin fa-stack-1x',
				),
		);
		foreach($classes as $single_class) {
			$class_output .= $single_class . ' ';
		}

		$outer_template = '<div class="social %s">%s</div>';
		$inner_template = '<a %s href="%s" class="social-btn"><span class="fa-stack fa-lg">  <i class="fa fa-circle fa-stack-2x icon-background"></i><i class="%s"></i></span></a>';
		$inner = '';
		foreach ($services as $service_array) {
			$service = $service_array['service'];
			$class = $service_array['class'];

			if ( $url = Social_Links::get( $service . '_url' ) ) {

				$inner .= sprintf( $inner_template, $target, esc_url( $url ), esc_attr( $class ) );
			}

		}

		return sprintf($outer_template, $class_output, $inner);


	}

}

new StarterSite();

