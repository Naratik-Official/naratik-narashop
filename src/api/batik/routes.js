const routes = (handler) => [
  {
    method: 'GET',
    path: '/batik',
    handler: handler.getBatikHandler,
  },
  {
    method: 'POST',
    path: '/batik',
    handler: handler.postBatikHandler,
  },
];

module.exports = routes;
