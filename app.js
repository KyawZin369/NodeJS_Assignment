const express = require('express')
const rootDir = require('./util/path')
const path = require('path')

const app = express();

app.use(express.static(path.join(rootDir,'public')))

app.get('/',(req,res,next)=>{
    res.sendFile(path.join(rootDir, "views" , "index.html"))
})

app.get('/user', (req,res,next)=>{
    res.sendFile(path.join(rootDir,"views","user.html"))
})

app.listen(3000);