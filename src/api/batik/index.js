const BatikHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'batik',
  version: '1.0.0',
  register: async (server, { service }) => {
    const batikHandler = new BatikHandler(service);
    server.route(routes(batikHandler));
  },
};
