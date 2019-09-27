const Router = require('express').Router();
const {showLandingPage, postIdea, getIdeas, editIdea, getEditForm, deleteIdea, about} = require('../controller/index')
Router.get('/',showLandingPage)
Router.get('/about',about)
Router.post('/postIdea',postIdea)
Router.get('/ideas',getIdeas)
Router.get('/editForm/:id',getEditForm)
Router.put('/editIdea/:id',editIdea)
Router.get('/deleteIdea/:id',deleteIdea)
module.exports = Router;