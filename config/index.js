const dotenv = require('dotenv');

dotenv.config();

const DB_CLUSTER = process.env.DB_CLUSTER;
const DB_NAME = process.env.DB_NAME;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_CLUSTER}/${DB_NAME}?retryWrites=true&w=majority`;
const JWT_SECRET = process.env.JWT_SECRET;
const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;

module.exports = { DB, JWT_SECRET, API_URL, API_KEY };
