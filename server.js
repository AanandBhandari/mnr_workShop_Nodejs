const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Middleware for static folder
app.use(express.static(path.join(__dirname, "public")));

app.set('view engine','ejs')
app.use('/',require('./route'))
app.listen(PORT,()=> console.log('server is on'))