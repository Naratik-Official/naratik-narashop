const autobindr = require('autobindr');

class BatikHandler {
  constructor(service) {
    this.service = service;
    autobindr(this);
  }

  async getBatikHandler(request, h) {
    try {
      const result = await this.service.getBatik();
      return h.response(result).code(200);
    } catch (error) {
      return error;
    }
  }

  async postBatikHandler(request, h) {
    try {
      const result = await this.service.addBatik();
      return h.response(result).code(201);
    } catch (error) {
      return error;
    }
  }
}

module.exports = BatikHandler;
