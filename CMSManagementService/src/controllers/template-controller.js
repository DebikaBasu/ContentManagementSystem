const TemplateService = require("../services/template-service");
const { StatusCodes } = require('http-status-codes');


const templateService = new TemplateService();


const getTemplates = async (req,res) => {
    try {
        const response = await templateService.getTemplates();
        return res.status(StatusCodes.CREATED).json({
            data: response,
            success: true,
            message: 'Successfully fetched all the templates',
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
    getTemplates
}