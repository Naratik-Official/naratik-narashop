const { db } = require('../config/db');
const snapshotToJson = require('../utils/utils');

class BatikServices {
  constructor() {
    this.db = db;
    this.batikDb = db.collection('batik');
  }

  async getBatik() {
    const result = await this
      .batikDb
      .get();

    return result.docs.map(snapshotToJson);
  }
}

module.exports = BatikServices;
