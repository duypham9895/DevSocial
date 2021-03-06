const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
    let errors = {};

    data.name = isEmpty(data.name) ? '' : data.name;
    data.email = isEmpty(data.email) ? '' : data.email;
    data.password = isEmpty(data.password) ? '' : data.password;
    data.passwordConfirm = isEmpty(data.passwordConfirm) ? '' : data.passwordConfirm;

    // Validation name
    if (!Validator.isLength(data.name, {
            min: 2,
            max: 30
        })) {
        errors.name = 'Name must be between 2 and 30 characters';
    }
    if (Validator.isEmpty(data.name)) {
        errors.name = 'Name field is required';
    }

    // Validation email
    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email field is required';
    }
    if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }

    // Validation password
    if (!Validator.isLength(data.password, {
            min: 6,
            max: 50
        })) {
        errors.password = 'Password must be at least 6 characters';
    }
    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password field is required';
    }

    // Validation comfirm password
    if (Validator.isEmpty(data.passwordConfirm)) {
        errors.passwordConfirm = 'Password confirm field is required';
    }

    if (!Validator.equals(data.password, data.passwordConfirm)) {
        errors.passwordConfirm = 'Passwords must match';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}