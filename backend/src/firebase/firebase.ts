import admin from "firebase-admin";
const serviceAccount = require("./service.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

export default admin;