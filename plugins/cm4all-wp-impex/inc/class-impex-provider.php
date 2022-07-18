<?php

namespace cm4all\wp\impex;

// Exit if accessed directly.
if (!defined('ABSPATH')) {
  exit();
}

require_once __DIR__ . '/interface-impex-named-item.php';

/**
 * @property-read string $name
 * @property-read callable $callback
 */
abstract class ImpexProvider implements ImpexNamedItem
{
  protected string $_name;
  protected $_callback;

  protected function __construct(string $name, callable $callback)
  {
    $this->_name = $name;
    $this->_callback = $callback;
  }

  public function __get($property)
  {
    switch ($property) {
        case 'name':
            return $this->_name;
        case 'callback':
            return $this->_callback;
        default:
            throw new ImpexRuntimeException(sprintf('abort getting invalid property "%s"', $property));
    }
  }
}
