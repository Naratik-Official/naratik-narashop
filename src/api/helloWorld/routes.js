const routes = (handler) => [
  {
    method: 'GET',
    path: '/',
    handler: handler.helloWorldHandler,
  },
];

module.exports = routes;
