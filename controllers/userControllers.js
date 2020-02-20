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
