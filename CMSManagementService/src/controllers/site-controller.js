const SiteService = require("../services/site-service");
const { StatusCodes } = require('http-status-codes');


const siteService = new SiteService();


const createSite = async (req,res) => {
    try {
        const response = await siteService.createSite({
            content: req.body.content
        }, req.body.userId, req.body.templateId);
        return res.status(StatusCodes.CREATED).json({
            data: response,
            success: true,
            message: 'Successfully created the site',
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

const getSites = async (req,res) => {
    try {
        const response = await siteService.getSites(req.query.userId);
        return res.status(StatusCodes.OK).json({
            data: response,
            success: true,
            message: 'Successfully get the site',
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
    createSite,
    getSites
}