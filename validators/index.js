const { body } = require('express-validator');

exports.registerValidation = () => [
  body('name', 'Name is required')
    .not()
    .isEmpty(),
  body('email', 'Please include a valid email')
    .isEmail(),
  body('password','Please enter a password with 8 or more characters')
    .isLength({ min: 8 })
];

exports.loginValidation = () => [
  body('email', 'Please include a valid email')
    .isEmail(),
  body('password', 'Password is required')
    .not()
    .isEmpty()
];
