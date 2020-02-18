const express = require('express');
const router = express.Router();
const { registerValidation } = require('../validators');
const { validationResult } = require('express-validator');

const User = require('../models/User');

router.post('/signup',
  registerValidation(),
  async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
      }

      user = new User({
        name,
        email,
        password
      });

      // Encrypt password

      // Return jsonwebtoken

    } catch (err) {
      console.error(err.message);
      
    }

  }
);

module.exports = router;
