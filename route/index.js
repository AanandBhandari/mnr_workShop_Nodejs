const Router = require('express').Router();
const {showLandingPage} = require('../controller/index')
Router.get('/',showLandingPage)
module.exports = Router;