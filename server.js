const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine','ejs')
app.use('/',require('./route'))
app.listen(PORT,()=> console.log('server is on'))