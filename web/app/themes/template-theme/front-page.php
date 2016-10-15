<?php
/**
 * The main template file
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists
 *
 * Methods for TimberHelper can be found in the /lib sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since   Timber 0.1
 */

use Timber\Timber;


if ( ! class_exists( 'Timber' ) ) {
	echo 'Timber not activated. Make sure you activate the plugin in <a href="/wp-admin/plugins.php#timber">/wp-admin/plugins.php</a>';

	return;
}
$context                                       = Timber::get_context();
$context['post']                               = Timber::get_post();
$context['quick_search']                       = dehart_search_form();
$context['contact_us']                         = do_shortcode( '[gravityform id="1" title="false" description="false"]' );
$context['mailing_list_form']                  = do_shortcode( '[yikes-mailchimp form="1" title="1" description="1" submit="Sign Up!"]' );
Timber::render( 'front-page.twig', $context );



