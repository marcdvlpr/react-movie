const { validationResult } = require('express-validator');
const { generateToken, generatePasswordHash, validatePassword } = require('../helpers/auth');
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

    user.password = await generatePasswordHash(password);

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
    const user = await User.findOne({ email }).select('+password');

    if (!user) {
      return res.status(401).json({ errors: [{ msg: 'Incorrect email or password' }] });
    }

    const isMatch = await validatePassword(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ errors: [{ msg: 'Incorrect email or password'}] });
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
