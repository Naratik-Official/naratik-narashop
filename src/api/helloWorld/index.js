// const HelloHandler = require('./handler');
// const routes = require('./routes');

// module.exports = {
//   name: 'hello',
//   version: '1.0.0',
//   register: async (server, { service }) => {
//     const helloHandler = new HelloHandler(service);
//     server.route(routes(helloHandler));
//   },
// };

const HelloHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'hello',
  version: '1.0.0',
  register: async (server, { service }) => {
    const helloHandler = new HelloHandler(service);
    server.route(routes(helloHandler));
  },
};
