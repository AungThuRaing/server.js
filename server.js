const express = require('express');
const app = express();

app.get('',(req,res)=>{
    res.send("<h1>Myanmar Web Developer</h1>")
})


app.listen(5135,()=>{
    console.log('Server is starting....')
})