const dotenv = require('dotenv');

dotenv.config();

const dbCluster = process.env.DB_CLUSTER;
const dbName = process.env.DB_NAME;
const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;

const db = `mongodb+srv://${dbUsername}:${dbPassword}@${dbCluster}/${dbName}?retryWrites=true&w=majority`

module.exports = { db };
