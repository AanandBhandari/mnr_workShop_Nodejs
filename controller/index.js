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

}