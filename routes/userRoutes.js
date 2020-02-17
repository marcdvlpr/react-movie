const express = require('express');
const router = express.Router();
const { registerValidation } = require('../validators');
const { validationResult } = require('express-validator');

router.post('/signup',
  registerValidation(),
  (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send(req.body)
  }
);

module.exports = router;
