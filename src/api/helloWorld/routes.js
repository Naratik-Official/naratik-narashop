const routes = (handler) => [
  {
    method: 'GET',
    path: '/',
    handler: handler.helloWorldHandler,
  },
  {
    method: 'POST',
    path: '/',
    handler: handler.toko,
  },
  {
    method: 'POST',
    path: '/{id}',
    handler: handler.stok,
  },
];

module.exports = routes;
