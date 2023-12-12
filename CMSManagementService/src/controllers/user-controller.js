const UserService = require('../services/user-service');
const { StatusCodes } = require('http-status-codes');

const userService = new UserService();

const Register = async(req,res) => {
    try {
        const response = await userService.register({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        return res.status(StatusCodes.CREATED).json({
            data: response,
            success: true,
            message: 'Successfully Registered',
            err: {}
        });
    } catch (error) {
        return res.status(error.statusCode).json({
            data: {},
            success: false,
            message: error.message,
            err: error.explanation
        });
    }
}

const Login = async(req,res) => {
    try {
        const response = await userService.login(req.body.email,req.body.password);
        return res.status(StatusCodes.OK).json({
            data: response,
            success: true,
            message: 'Successfully Logged In',
            err: {}
        });
    } catch (error) {
        return res.status(error.statusCode).json({
            data: {},
            success: false,
            message: error.message,
            err: error.explanation
        });
    }
}

const isAuthenticated = async (req,res) => {
    try {
        const token = req.headers['x-access-token'];
        const response = await userService.isAuthenticate(token);
        return res.status(StatusCodes.OK).json({
            data: response,
            success: true,
            
            message: 'Authenticated User Successfully',
            err: {}
        });
    } catch (error) {
        return res.status(error.statusCode).json({
            data: {},
            success: false,
            message: error.message,
            err: error.explanation
        });
    }
}

module.exports = {
    Register,
    Login,
    isAuthenticated
}