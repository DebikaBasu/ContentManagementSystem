const { User } = require("../models/index");
const { StatusCodes } = require('http-status-codes');
const ClientErrors = require('../utils/client-error');
const AppErrors = require("../utils/error-handler");

class UserRepository {
    
    async createUser(data) {
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
            if(error.name == 'SequelizeUniqueConstraintError'){
                throw new AppErrors(
                    'ExistingUserError',
                    'User is already exist',
                    'Provided email already exist please login or signup using other email',
                    StatusCodes.BAD_REQUEST
                );
            }
            throw new AppErrors();
        }
    }

    async getUserById (userId) {
        try {
            const user = await User.findByPk(userId,{
                attributes: ['email', 'id']
            });
            return user;
        } catch (error) {
            throw new AppErrors(
                "UserNotFound",
                "User doesn't exist",
                "Something went wrong",
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }

    async getUserByEmail (userEmail) {
        try {
            const user = await User.findOne({
                where: {
                    email: userEmail
                }
            });
            if(!user) {
                throw new ClientErrors(
                    'EmailNotFound',
                    'Invalid email sent in request',
                    'Please Check the email provided, as there is no record of the email',
                    StatusCodes.NOT_FOUND
                );
            }
            return user;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserRepository;