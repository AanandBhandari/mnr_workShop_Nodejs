const express = require('express');
const app = express();
const PORT = 3000

// app.get('/',(req,res)=> {
//     res.send('hellow')
// })
app.use('/',require('./route'))
app.listen(PORT,()=> console.log('server is on'))