<?php

/**
 *   Code Structure:
 *   Providers are loaded over the Impex::WP_ACTION_REGISTER_PROVIDERS Hook
 *   --> \add_action( Impex::WP_ACTION_REGISTER_PROVIDERS, function () { ... } )
 */

if (!defined('ABSPATH')) {
    exit();
}

require_once ABSPATH . 'wp-admin/includes/import.php';

use cm4all\wp\impex\Impex\Extension;
use cm4all\wp\impex\ImpexExportTransformationContext;

function __ElementorContentExportProviderCallback (array $slice, array $options, ImpexExportTransformationContext $transformationContext): \Generator
{

}