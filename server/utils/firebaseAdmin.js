// utils/firebaseAdmin.js

const admin = require('firebase-admin');

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  // You can add other configuration options here
});

module.exports = admin;
