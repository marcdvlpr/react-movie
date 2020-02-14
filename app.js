const express = require('express');
const connectDB = require('./config/database');

const app = express();

// Connect Database
connectDB();

app.get('/', (req, res) => {
  res.send('API Running');
});

module.exports = app;
