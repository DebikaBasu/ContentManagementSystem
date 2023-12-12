const { StatusCodes } = require('http-status-codes');

const validateUserRegister = (req, res, next) => {
    const validEmail = validateEmail(req.body.email);
    if(!validEmail){
        return res.status(StatusCodes.BAD_REQUEST).json({
            data: {},
            success: false,
            message: 'Email or password format wrong',
            err: 'Please Check your Email & Password'
        });
    }
    if (!req.body.name || !req.body.email || !req.body.password) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            data: {},
            success: false,
            message: 'Email or password missing in the request',
            err: 'Please fill up all the details'
        });
    }
    next();
}

const validateUserLogin = (req, res, next) => {
    if (!req.body.email || !req.body.password) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            data: {},
            success: false,
            message: 'Please Check your email & password',
            err: 'Please fill up all the details'
        })
    }
    next();
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

const validatePassword = (str) => {
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    return re.test(str);
}

module.exports = {
    validateUserRegister,
    validateUserLogin
}