const router = require('express').Router();
const authController = require('../controllers/authController');

// Register Routes
router.get('/signup', authController.registerGet);

// Login Route
router.get('/signin', authController.loginGet);

module.exports = router;
