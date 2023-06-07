#!/bin/bash

set -e

yarn install

# yarn webpack:production

exec "$@"
