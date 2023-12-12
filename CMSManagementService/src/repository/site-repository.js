const { Site, User, Template } = require("../models/index");
const { StatusCodes } = require('http-status-codes');
const AppErrors = require("../utils/error-handler");

class SiteRepository {
    
    async createSite(data, userId, templateId) {
        try {
            const site = await Site.create(data);
            const user = await User.findByPk(userId);
            await user.addSite(site.id);
            const template = await Template.findByPk(templateId);
            await template.addSite(site.id);
            return site;
        } catch (error) {
            console.log(error)
            throw new AppErrors(
                'ServerError',
                'Something went wrong',
                'Something went wrong during publish',
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }

    async getSites(userId) {
        try {
            const user = await User.findByPk(userId);
            const sites = await user.getSites();
            return sites;
        } catch (error) {
            throw new AppErrors(
                "SitesNotFound",
                "Sites not available",
                "Something went wrong",
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }
}

module.exports = SiteRepository;