const { validationResult } = require('express-validator');

const User = require('../models/User');

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.updateUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { username, email } = req.body;

  const userField = {};
  if (username) userField.username = username;
  if (email) userField.email = email;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      { $set: userField },
      { new: true, upsert: true }
    ).select('-password');

    res.status(200).json(updatedUser);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndRemove(req.user.id);

    res.json({ msg: 'User deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
