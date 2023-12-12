const { StatusCodes } = require('http-status-codes');
const TemplateRepository = require("../repository/template-repository");
const AppErrors = require('../utils/error-handler');

class TemplateService {

    constructor(){
        this.templateRepository = new TemplateRepository();
    }
    
    async createTemplate(data) {
        try {
            const template = await this.templateRepository.createTemplate(data);
            return template;
        } catch (error) {
            throw new AppErrors();
        }
    }

    async getTemplates () {
        try {
            const templates = await this.templateRepository.getTemplates();
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

module.exports = TemplateService;