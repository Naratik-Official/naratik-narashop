class HelloHandler {
  constructor(service) {
    this.service = service;

    this.helloWorldHandler = this.helloWorldHandler.bind(this);
  }

  async helloWorldHandler(request, h) {
    try {
      const result = await this.service.helloWorld();

      const response = h.response(result).code(200);
      return response;
    } catch (error) {
      return error;
    }
  }
}

module.exports = HelloHandler;
