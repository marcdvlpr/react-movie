const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const { generateToken } = require('../helpers/auth');
const User = require('../models/User');

exports.register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { username, email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
    };

    user = new User({
      username,
      email,
      password
    });

    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password, salt);

    await user.save()

    const payload = {
      user: {
        id: user.id
      }
    };

    const token = generateToken(payload);

    res.status(201).json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ errors: [{ msg: 'Incorrect email or password' }] });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ errors: [{ msg: 'Incorrect email or password'}] });
    }

    const payload = {
      user: {
        id: user.id
      }
    };

    const token = generateToken(payload);

    res.json({ token })
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
