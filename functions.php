<?php

// function wplilo_setup () {
//   load_theme_textdomain('wplilo');
//   load_theme_support('title-tag');
//   load_theme_support('custom_logo');
// }

// add_action('after_setup_theme', 'wplilo_setup');

function wplilo_scripts() {
  wp_enqueue_style('bootstrap', get_template_directory_uri() . '/assets/css/bootstrap.min.css');
  wp_enqueue_style('style-css', get_stylesheet_uri());
  wp_enqueue_style('style-background-css', get_template_directory_uri() . '/assets/css/background.css');

  // wp_enqueue_scripts('bootstrap-js', "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")
}
add_action( 'wp_enqueue_scripts', 'wplilo_scripts');