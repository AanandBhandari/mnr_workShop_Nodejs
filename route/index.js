const Router = require('express').Router();
const {showLandingPage, postIdea} = require('../controller/index')
Router.get('/',showLandingPage)
Router.post('/postIdea',postIdea)
module.exports = Router;