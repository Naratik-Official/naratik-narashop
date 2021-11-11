const { db } = require('../config/db');
const snapshotToJson = require('../utils/utils');

class HelloServices {
  constructor() {
    this.db = db;
    this.helloDb = db.collection('helloWorld');
    this.tokoDb = db.collection('toko');
  }

  async helloWorld() {
    const result = await this
      .helloDb
      .get();

    return result.docs.map(snapshotToJson);
  }

  async ping({ nama }) {
    const result = await this
      .helloDb
      .add({
        name: nama,
      });

    const hasil = await this
      .helloDb
      .doc(result.id)
      .collection('kain')
      .add({
        nama: 'mori',
        stok: 5,
      });
    return hasil.id;
  }
}

module.exports = HelloServices;
