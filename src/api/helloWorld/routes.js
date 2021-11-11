const routes = (handler) => [
  {
    method: 'GET',
    path: '/',
    handler: handler.helloWorldHandler,
  },
  {
    method: 'POST',
    path: '/',
    handler: handler.ping,
  },
];

module.exports = routes;
