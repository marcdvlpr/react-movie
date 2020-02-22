const mongoose = require('mongoose');
const { DB } = require('./index');

const connectDB = async () => {
  const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  };

  try {
    await mongoose.connect(DB, options);

    console.log('Connected to the DB 🛰');
  } catch (err) {
    console.error(err.message)
  }
};

module.exports = connectDB;
