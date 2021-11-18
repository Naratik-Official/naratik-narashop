const Hapi = require('@hapi/hapi');

const hello = require('./api/helloWorld');
const HelloServices = require('./services/HelloService');

const batik = require('./api/batik');
const BatikServices = require('./services/BatikService');

const init = async () => {
  const helloServices = new HelloServices();
  const batikServices = new BatikServices();

  const server = Hapi.server({
    port: process.env.PORT || '8080',
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  await server.register([
    {
      plugin: hello,
      options: {
        service: helloServices,
      },
    },
    {
      plugin: batik,
      options: {
        service: batikServices,
      },
    },
  ]);
  await server.start();
  process.stdout.write(`Server berjalan pada ${server.info.uri}`);
};

init();
