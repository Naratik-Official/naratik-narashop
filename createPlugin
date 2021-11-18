#!/bin/zsh
# This script only works using zsh shell

# Provide plugin name as CLI argument (camel case)
pluginName="$1"
pluginUpper=${(C)pluginName}
handler=${pluginName}Handler
handlerUpper=${pluginUpper}Handler
serviceUpper=${pluginUpper}Service
dir=./src/api/${pluginName}

mkdir ${dir}
touch ${dir}/index.js
touch ${dir}/handler.js
touch ${dir}/routes.js
touch ./src/services/${serviceUpper}.js

cat << EOF > ./src/api/$1/routes.js
const routes = (handler) => [
  {
    method: '',
    path: '/',
    handler: handler,
  },
];

module.exports = routes;
EOF

cat << EOF > ./src/api/$1/index.js
const $handlerUpper = require('./handler');
const routes = require('./routes');

module.exports = {
  name: '$1',
  version: '1.0.0',
  register: async (server, { service }) => {
    const $handler = new ${handlerUpper}(service);
    server.route(routes($handler));
  },
};
EOF

cat << EOF > ./src/api/$1/handler.js
const autobindr = require('autobindr');

class $handlerUpper {
  constructor(service) {
    this.service = service;
    autobindr(this);
  }
}

module.exports = $handlerUpper;
EOF

cat << EOF > ./src/services/${serviceUpper}.js
const { db } = require('../config/db');

class ${serviceUpper}s {
  constructor() {
    this.db = db;
  }
}

module.exports = ${serviceUpper}s;
EOF