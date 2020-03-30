const express = require('express');
const logger = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');
const routes = require('./routes');

const app = express();

app.use(cors());

// Set security HTTP headers
app.use(helmet());

if (process.env.NODE_ENV === 'development') {
  app.use(logger('dev'));
}

// Body parser
app.use(express.json());

// Define Routes
app.use('/api/v1', routes)

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static fodler
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

module.exports = app;
