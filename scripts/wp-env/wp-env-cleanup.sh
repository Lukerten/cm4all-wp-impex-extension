#! /usr/bin/env bash
WP_ENV_HOME="wp-env-home" wp-env stop
WP_ENV_HOME="wp-env-home" wp-env clean
rm -rf "wp-env-home"
WP_ENV_HOME="wp-env-home" echo yes | wp-env destroy
echo y | docker system prune --all --volumes
