const mongoose = require('mongoose');
const { db } = require('./index');

const connectDB = async () => {
  const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  };

  try {
    await mongoose.connect(db, options);

    console.log('Connected to the DB 🛰');
  } catch (err) {
    console.error(err.message)
  }
};

module.exports = connectDB;
