const express = require('express');
const app = express();
const PORT = 3000
app.get('/',(req,res)=> {
    res.send('hellow')
})
app.listen(PORT,()=> console.log('server is on'))