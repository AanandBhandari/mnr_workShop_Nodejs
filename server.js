const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path')
const mongoose = require('mongoose');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// database connection
mongoose.connect('mongodb+srv://Aanand:aanand@cluster0-lv7sa.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(console.log('connected to the database'))

//Middleware for static folder
app.use(express.static(path.join(__dirname, "public")));

app.set('view engine','ejs')
app.use('/',require('./route'))
app.listen(PORT,()=> console.log('server is on'))