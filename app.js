const express = require('express');
const connectDB = require('./config/database');

const app = express();

// Connect Database
connectDB();

// Body parser
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API Running');
});

module.exports = app;
