const { body } = require("express-validator");

const registerValidation = [
body('username').isLength({min: 3}).withMessage("Username must be at least 3 characters").trim(),
body('email').trim().isEmail().withMessage("Invalid email format").normalizeEmail(),
body('password').isStrongPassword({minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1}).withMessage('Password must contain at least 8 characters, including 1 uppercase letter, 1 lowercase letter, 1 number, and 1 symbol'),
body('confirmPassword').trim().notEmpty().withMessage('Confirm password is required').custom((value, {req})=>{
    if(value !== req.body.password){
      throw new Error('Passwords do not match')
    }
    return true;
  })

];

const loginValidation = [
body('email').isEmail().withMessage("Invalid email"),
body('password').notEmpty().withMessage("Password is required")
];


module.exports = {
  registerValidation,
  loginValidation
}