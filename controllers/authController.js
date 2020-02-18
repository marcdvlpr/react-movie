const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

const User = require('../models/User');

exports.register = async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
    };

    user = new User({
      name,
      email,
      password
    });

    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password, salt);

    await user.save()

    res.send('User register')

  } catch (err) {
    console.error(err.message);
  }
};
