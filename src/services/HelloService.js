// const { Timestamp } = require('@google-cloud/firestore');
const { db, fs } = require('../config/db');
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

  async stok(id, { barang, stok }) {
    const data = {
      nama: barang,
      stok,
      createdAt: fs.firestore.FieldValue.serverTimestamp(),
    };
    const result = await this
      .tokoDb
      .doc(id)
      .collection('kain')
      .add(data);
    return result.id;
  }

  async toko({ nama }) {
    const result = await this
      .tokoDb
      .add({
        nama,
      });
    return result.id;
  }
}

module.exports = HelloServices;
