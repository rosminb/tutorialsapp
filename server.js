const { response } = require('express');
const path = require('path');
const express = require('express')
const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname,'./savory')));
app.get('/',(request,response)=>{
    response.sendFile(path.join(__dirname,'./savory/index.html'))
})
app.listen(port,()=>{
console.log(`Express server is listening to port ${port}!`)
})