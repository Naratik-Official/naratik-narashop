const routes = (handler) => [
  {
    method: 'GET',
    path: '/batik',
    handler: handler.getBatikHandler,
  },
];

module.exports = routes;
