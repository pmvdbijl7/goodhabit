const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv/config');
const {
	registerValidation,
	loginValidation,
} = require('./validationController');

// Get Register Page
const registerGet = (req, res) => {
	res.render('pages/auth/register', { title: 'Sign Up' });
};

const loginGet = (req, res) => {
	res.render('pages/auth/login', { title: 'Sign In' });
};

module.exports = {
	registerGet,
	loginGet,
};
