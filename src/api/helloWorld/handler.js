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

  async stok(request, h) {
    try {
      const { id } = request.params;
      const result = await this.service.stok(id, request.payload);
      return h.response(result).code(202);
    } catch (error) {
      return error;
    }
  }

  async toko(request, h) {
    try {
      const result = await this.service.toko(request.payload);
      return h.response(result).code(201);
    } catch (error) {
      return error;
    }
  }
}

module.exports = HelloHandler;
