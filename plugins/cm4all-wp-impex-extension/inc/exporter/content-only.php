<?php 

namespace cm4all\wp\impex\extension\providers;

if (!defined('ABSPATH')){
    exit();
}

use cm4all\wp\impex\ContentExporter;
use cm4all\wp\impex\Impex;
use cm4all\wp\impex\WpOptionsExporter;


require_once(ABSPATH . 'wp-admin/includes/plugin.php');
$profile = Impex::getInstance()->Export->addProfile('Content Only');
$profile->setDescription('imports only Data created by the Content Exporter ');

$profile->addTask('wordpress content',ContentExporter::PROVIDER_NAME);