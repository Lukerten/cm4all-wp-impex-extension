<?php

namespace cm4all\wp\impex;

use JsonSerializable;

// Exit if accessed directly.
if (!defined('ABSPATH')) {
  exit();
}

require_once __DIR__ . '/class-impex-part.php';
require_once __DIR__ . '/class-impex-runtime-exception.php';
require_once ABSPATH . 'wp-admin/includes/file.php';
/**
 * ImpexTransformationContext is a superset of ImpexImportTransformationContext and ImpexExportTransformationContext
 * 
 * @property-read string $id
 * @property-read string $name
 * @property-read string $description
 * @property-read string $created
 * @property-read \WP_User $user
 * @property-read string $path
 * @property-read string $url
 * @property-read array $options
 * @property-read ImpexProfile $profile
 */
abstract class ImpexTransformationContext implements \JsonSerializable
{
  protected string $_id;
  protected string $_name;
  protected string $_description;
  protected string $_created;
  protected string $_user_login;
  protected string $_uploads_subpath;
  protected string $_profile_name;
  protected array $_options;
  protected bool $_isExportPart;
  protected array $_log = array();

  /**
   * @param string|null $id
   * @param string|null $name
   * @param string|null $description
   * @param string|null $created
   * @param string|null $user_login
   * @param mixed[]|null $options
   */
  protected function __construct(ImpexPart $part, string $profile_name, $id = null, $name = null, $description = null, $created = null, $user_login = null, $options = null)
  {
      $this->_isExportPart = Impex::getInstance()->Export === $part;
      // ensure profile exists
      if (null === Impex::getInstance()->{$this->_isExportPart ? 'Export' : 'Import'}->getProfile($profile_name))
        throw new ImpexRuntimeException(sprintf('Profile "%s" does not exist', $profile_name));
      $this->_profile_name = $profile_name;
      $this->_id = $id ?? \wp_generate_uuid4();
      // we take this date format to be wordpress rest api (format='date-time') compliant
      $this->_created = $created ?? date(DATE_RFC3339);
      $this->_user_login ??= $user_login ?? \wp_get_current_user()->user_login;
      // ensure user exists
      if (false === \get_user_by('login', $this->_user_login))
        throw new ImpexRuntimeException(sprintf('user "%s" not found', $this->_user_login));
      if ($name === null || $name === '') {
        $this->_name = ($this->_isExportPart ? 'Export' : 'Import') . " '{$profile_name}' created by user '{$this->_user_login}' at {$this->_created}";
      } else {
        $this->_name = $name;
      }
      $this->_description = $description ?? '';
      $this->_uploads_subpath ??= 'impex/snapshots/' . $this->_id;
      $this->_options = $options ?? [];
      global $wp_filesystem;
      \WP_Filesystem();
      // ensure uploads_subpath path  exists
      $uploads_subpath = \wp_get_upload_dir()['basedir'] . '/' . $this->_uploads_subpath;
      $wp_filesystem->exists($uploads_subpath) || \wp_mkdir_p($uploads_subpath);
  }

  public function __get($property)
  {
    switch ($property) {
        case 'id':
            return $this->_id;
        case 'name':
            return $this->_name;
        case 'description':
            return $this->_description;
        case 'created':
            return $this->_created;
        case 'user':
            return \get_user_by('login', $this->_user_login);
        case 'path':
            return \wp_get_upload_dir()['basedir'] . '/' . $this->_uploads_subpath;
        case 'url':
            return \wp_get_upload_dir()['baseurl'] . '/' . $this->_uploads_subpath;
        case 'profile':
            return Impex::getInstance()->{$this->_isExportPart ? 'Export' : 'Import'}->getProfile($this->_profile_name);
        case 'options':
            return $this->_options;
        case 'log':
            return $this->_log;
        default:
            throw new ImpexRuntimeException(sprintf('abort getting invalid property "%s"', $property));
    }
  }

  public function warn(string $message, array $cause = [])
  {
    $this->_log[] = [
      'type' => 'warning',
      'message' => $message,
      'cause' => $cause,
    ];
  }

  /**
   * @see JsonSerializable::jsonSerialize()
   * @return mixed
   */
  public function jsonSerialize()
  {
    return [
      "id" => $this->_id,
      "name" => $this->_name,
      "description" => $this->_description,
      "created" => $this->_created,
      "user" => $this->_user_login,
      "profile" => $this->_profile_name,
      "options" => $this->_options,
    ];
  }

  /**
   * @return $this
   */
  abstract static function fromJson(array $json);
}

class ImpexExportTransformationContext extends ImpexTransformationContext
{
  /**
   * @param string|null $id
   * @param string|null $name
   * @param string|null $description
   * @param string|null $created
   * @param string|null $user_login
   * @param mixed[]|null $options
   */
  public function __construct(string $profile_name, $id = null, $name = null, $description = null, $created = null, $user_login = null, $options = null)
  {
      parent::__construct(Impex::getInstance()->Export, $profile_name, $id, $name, $description, $created, $user_login, $options);
  }

  /**
   * @return $this
   */
  public static function fromJson(array $json)
  {
    return new static($json['profile'], $json['id'], $json['name'], $json['description'], $json['created'], $json['user'], $json['options']);
  }
}

class ImpexImportTransformationContext extends ImpexTransformationContext
{
  /**
   * @param string|null $id
   * @param string|null $name
   * @param string|null $description
   * @param string|null $created
   * @param string|null $user_login
   * @param mixed[]|null $options
   */
  public function __construct(string $profile_name, $id = null, $name = null, $description = null, $created = null, $user_login = null, $options = null)
  {
      parent::__construct(Impex::getInstance()->Import, $profile_name, $id, $name, $description, $created, $user_login, $options);
  }

  /**
   * @return $this
   */
  public static function fromJson(array $json)
  {
    return new static($json['profile'], $json['id'], $json['name'], $json['description'], $json['created'], $json['user'], $json['options']);
  }
}
