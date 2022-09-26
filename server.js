const express = require('express');
const path = require('path')

const app = express();


app.get('',(req,res)=>{
    res.send("<h1>Myanmar Web Developer</h1>")
})

app.get('/myanmar',function(req,res){
    res.sendFile(path.join(__dirname,'/index.html'))
})


app.listen(5135,()=>{
    console.log('Server is starting....')
})