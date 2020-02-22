const express = require('express');
const logger = require('morgan');
const connectDB = require('./config/database');
const routes = require('./routes');

const app = express();

// Connect Database
connectDB();

app.use(logger('dev'));

// Body parser
app.use(express.json());

// Define Routes
app.use('/api/v1', routes)

app.get('/', (req, res) => {
  res.send('API Running');
});

module.exports = app;
