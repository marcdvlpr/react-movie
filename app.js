const express = require('express');
const logger = require('morgan');
const connectDB = require('./config/database');

const app = express();

// Connect Database
connectDB();

const authRouter = require('./routes/authRoutes');

app.use(logger('dev'));

// Body parser
app.use(express.json());

// Define Routes
app.use('/api/v1/auth', authRouter)

app.get('/', (req, res) => {
  res.send('API Running');
});

module.exports = app;
