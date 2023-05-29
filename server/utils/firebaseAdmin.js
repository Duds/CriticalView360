// firebaseAdmin

var admin = require("firebase-admin");

var serviceAccount = require("../../serviceAccount/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;
