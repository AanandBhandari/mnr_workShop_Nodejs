const Router = require('express').Router();
const {showLandingPage, postIdea, getIdeas, editIdea, getEditForm} = require('../controller/index')
Router.get('/',showLandingPage)
Router.post('/postIdea',postIdea)
Router.get('/ideas',getIdeas)
Router.get('/editForm/:id',getEditForm)
Router.put('/editIdea/:id',editIdea)
module.exports = Router;