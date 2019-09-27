const Idea = require('../models/Idea')
exports.showLandingPage = (req,res) => {
    res.render('index', { quote:'Ideas are the beginning points of all fortunes.'})
}
exports.postIdea = (req,res) => {
    if (req.body.title !== "" && req.body.description !=="") {
        const newIdea =new Idea( {
            title: req.body.title,
            description : req.body.description
        })
        // return newIdea.save().then(savedIdea=> res.send(savedIdea))
        return newIdea.save().then(res.redirect('/'))
    }
    res.send('title or description is empty');
}
exports.getIdeas = (req,res) => {
    Idea.find({}).then(ideas=>{
        res.render('ideas',{ideas})
    })
}

exports.getEditForm = (req,res) => {
    Idea.findById(req.params.id).then(idea=> {
        res.render('edit',{idea})
    })
}

exports.editIdea = (req,res) => {
    Idea.findById(req.params.id).then(idea=>{
        if (req.body.title !== "" && req.body.description !== "") {
        idea.title = req.body.title;
        idea.description = req.body.description;
        idea.save();
        res.redirect('/ideas')
    }})
}

exports.deleteIdea = (req,res) => {
    Idea.findByIdAndRemove(req.params.id).then(()=>res.redirect('/ideas'))
}
exports.about = (req,res) => {
    res.render('about')
}