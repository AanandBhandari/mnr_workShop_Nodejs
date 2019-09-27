exports.showLandingPage = (req,res) => {
    res.render('index', { quote:'Ideas are the beginning points of all fortunes.'})
}
exports.postIdea = (req,res) => {
    console.log('hello');
    res.send(req.body.title)
}