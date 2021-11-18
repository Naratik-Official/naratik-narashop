const { db, fs } = require('../config/db');
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

  async addBatik({
    batikName,
    location,
    image,
    mainCategory,
    sortCategory,
  }) {
    const data = {
      batikName,
      location,
      image,
      mainCategory,
      sortCategory,
      createdAt: fs.firestore.FieldValue.serverTimestamp(),
    };
    const result = await this
      .batikDb
      .add(
        data,
      );
    return result.id;
  }
}

module.exports = BatikServices;
