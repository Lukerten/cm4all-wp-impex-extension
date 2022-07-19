<?php

/**
 * Plugin Name: cm4all-wp-impex-extension
 * Description: Example plugin contributing additional Importer/Exporter facilities to ImpEx plugin 
 * Version: 1.0.0
 * Tags: import, export, migration
 * Requires PHP: 8.0
 * Requires at least: 5.7
 * Author: Lucas Brendgen, CM4all
 * Author URI: https://cm4all.com
 * Domain Path: /languages
 **/

namespace cm4all\wp\impex\extension;

if (!defined('ABSPATH')) {
    exit();
}

\add_action('cm4all_wp_impex_register_profiles', function () {
    //Exporters 
    require_once __DIR__ . '/inc/exporter/content-only.php';
    require_once __DIR__ . '/inc/exporter/media-only.php';
    // require_once __DIR__ . '/inc/exporter/test.php';

    //Importers
    // require_once __DIR__ . '/inc/importer/test.php';
});
