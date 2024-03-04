const express = require('express');
const router = express.Router();

const AuthController = require('../controllers/auth');

router.post('/register', AuthController.createUser);
router.post('/login', AuthController.loginUser);

// password forgot and reset routes
// router.put("/forgot-password", forgotPassword);
// router.put("/reset-password", passwordResetValidator, resetPassword);

module.exports = router;