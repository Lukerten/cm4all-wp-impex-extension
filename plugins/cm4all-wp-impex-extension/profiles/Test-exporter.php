<?php

namespace cm4all\wp\impex;

use cm4all\wp\impex\AttachmentsExporter;
use cm4all\wp\impex\ContentExporter;
use cm4all\wp\impex\Impex;

defined('ABSPATH') or die("cannot access this directly");


$profile = Impex::getInstance()->Export->addProfile('test');
$profile->setDescription('testing Expost function for Development');
