
const express = require('express');
const UserController = require('../controllers/user-controller');
const { getTemplates } = require('../controllers/template-controller');
const {validateUserRegister, validateUserLogin} = require('../middlewares/auth-request-validator');
const { createSite, getSites } = require('../controllers/site-controller');

const router = express.Router();

router.post('/register', validateUserRegister, UserController.Register);
router.post('/login', validateUserLogin, UserController.Login);

router.get('/authenticates', UserController.isAuthenticated)

router.get('/templates', getTemplates)

router.post('/sites', createSite);
router.get('/sites', getSites)



module.exports = router;