<?php

namespace cm4all\wp\impex;

defined('ABSPATH') or die("Cannot access file like this");

$profile = Impex::getInstance()->Import->addProfile(`Luke's Import Profile`);
$profile->setDescription('Working Profile to Test importing options');

$provider = null;

$provider = Impex::getInstance()->Import->addProvider('test', function (array $slice, array $options, ImpexImportTransformationContext $transformationContext) use (&$provider): bool {
    foreach (Impex::getInstance()->Import->getProviders() as $_provider) {
        if ($_provider === $provider) {
            continue;
        }

        if (call_user_func($_provider->callback, $slice, $options, $transformationContext)) {
            return true;
        }
    }

    return false;
});

$profile->addTask('main', $provider->name);
