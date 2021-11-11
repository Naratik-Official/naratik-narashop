const snapshotToJson = (doc) => ({ id: doc.id, ...doc.data() });

module.exports = snapshotToJson;
