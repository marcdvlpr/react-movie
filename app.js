const express = require('express');
const logger = require('morgan');
const helmet = require('helmet');
const routes = require('./routes');

const app = express();

// Set security HTTP headers
app.use(helmet());

if (process.env.NODE_ENV === 'development') {
  app.use(logger('dev'));
}

// Body parser
app.use(express.json());

// Define Routes
app.use('/api/v1', routes)

app.get('/', (req, res) => {
  res.send('API Running');
});

module.exports = app;
