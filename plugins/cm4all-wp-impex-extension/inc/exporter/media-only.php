<?php 

namespace cm4all\wp\impex\extension\providers;

if (!defined('ABSPATH')){
    exit();
}

use cm4all\wp\impex\AttachmentsExporter;
use cm4all\wp\impex\Impex;
use cm4all\wp\impex\WpOptionsExporter;


require_once(ABSPATH . 'wp-admin/includes/plugin.php');
$profile = Impex::getInstance()->Export->addProfile('Media Only');
$profile->setDescription('imports only Data created by the Attatchment Exporter');

$profile->addTask('wordpress attachments (uploads)', AttachmentsExporter::PROVIDER_NAME,);