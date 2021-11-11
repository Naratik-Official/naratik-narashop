const autobindr = require('autobindr');

class HelloHandler {
  constructor(service) {
    this.service = service;
    autobindr(this);
  }

  async helloWorldHandler(request, h) {
    try {
      const result = await this.service.helloWorld();
      return h.response(result).code(200);
    } catch (error) {
      return error;
    }
  }

  async ping(request, h) {
    try {
      const result = await this.service.ping(request.payload);
      return h.response(result).code(201);
    } catch (error) {
      return error;
    }
  }
}

module.exports = HelloHandler;
