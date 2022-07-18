<?php

namespace cm4all\wp\impex;

// Exit if accessed directly.
if (!defined('ABSPATH')) {
  exit();
}

require_once ABSPATH . '/wp-includes/functions.php';
require_once __DIR__ . '/interface-impex-named-item.php';
require_once __DIR__ . '/class-impex-provider.php';

/**
 * @property-read string $name
 * @property-read ImpexProvider $provider
 * @property-read array $options
 * @property-read bool $disabled
 */
abstract class ImpexProfileTask implements ImpexNamedItem
{
  protected string $_name;

  protected array $_options;

  protected bool $_disabled = false;

  public function __construct(string $name, ImpexProvider $impexProvider, array $options = [])
  {
    $this->_name = $name;
    $this->_provider = $impexProvider;
    $this->_options = $options;
  }

  public function __get($property)
  {
    switch ($property) {
        case 'name':
            return $this->_name;
        case 'provider':
            return $this->_provider;
        case 'options':
            return $this->_options;
        case 'disabled':
            return $this->_disabled;
        default:
            throw new ImpexRuntimeException(sprintf('abort getting invalid property "%s"', $property));
    }
  }

  /**
   * @return $this
   */
  public function setOptions(array $options)
  {
    // @TODO: add validation
    $this->_options = $options;

    return $this;
  }

  /**
   * @return $this
   */
  public function setDisabled(bool $disabled)
  {
    $this->_disabled = $disabled;

    return $this;
  }
}
