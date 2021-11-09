const { db } = require('../config/db');
const collectionMap = require('../utils/utils');

class HelloServices {
  constructor() {
    this.db = db;
    this.helloDb = db.collection('helloWorld');
  }

  async helloWorld() {
    const result = await this
      .helloDb
      .get();

    return result.docs.map(collectionMap);
  }
}

module.exports = HelloServices;
