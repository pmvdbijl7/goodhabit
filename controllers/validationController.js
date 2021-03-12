const Joi = require('joi');

const registerValidation = (data) => {
	const schema = Joi.object({
		firstname: Joi.string().min(2).max(255).required(),
		lastname: Joi.string().min(2).max(255).required(),
		dateofbirth: Joi.date().required(),
		email: Joi.string().max(255).email().required(),
		password: Joi.string().min(8).max(1024).required(),
	});

	return schema.validate(data);
};

const loginValidation = (data) => {
	const schema = Joi.object({
		email: Joi.string().max(255).email().required(),
		password: Joi.string().min(8).required(),
	});

	return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
