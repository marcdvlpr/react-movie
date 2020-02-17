const express = require('express');
const connectDB = require('./config/database');

const app = express();

// Connect Database
connectDB();

const userRouter = require('./routes/userRoutes');

// Body parser
app.use(express.json());

// Define Routes
app.use('/api/v1/users', userRouter)

app.get('/', (req, res) => {
  res.send('API Running');
});

module.exports = app;
