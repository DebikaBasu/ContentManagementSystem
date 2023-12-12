const SiteRepository = require('../repository/site-repository');

class SiteService {

    constructor(){
        this.siteRepository = new SiteRepository();
    }
    
    async createSite(data, userId, templateId) {
        try {
            console.log(data);
            const site = await this.siteRepository.createSite(data, userId, templateId);
            return site;
        } catch (error) {
            throw error;
        }
    }

    async getSites(userId) {
        try {
            const sites = await this.siteRepository.getSites(userId);
            return sites;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = SiteService;