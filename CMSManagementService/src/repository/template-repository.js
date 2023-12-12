const { Template } = require("../models/index");
const { StatusCodes } = require('http-status-codes');
const AppErrors = require("../utils/error-handler");

class TemplateRepository {
    
    async createTemplate(data) {
        try {
            const template = await Template.create(data);
            return template;
        } catch (error) {
            throw new AppErrors();
        }
    }

    async getTemplates () {
        try {
            const templates = await Template.findAll();
            return templates;
        } catch (error) {
            throw new AppErrors(
                "TemplatesNotFound",
                "Templates not available",
                "Something went wrong",
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }
}

module.exports = TemplateRepository;