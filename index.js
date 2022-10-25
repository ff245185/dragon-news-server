// const { application } = require("express");

const express = require("express")
const cors = require('cors')
const app = express();
 const port = 5000;

 app.use(cors());

const Catagroy = require('./data/Catagroy.json')

app.get('/',(req, res)=>{
    res.send('abdullah ')
});

app.get('/news-Catagroy',(req, res)=>{
    res.send(Catagroy)
})

app.listen(port,()=>{
    console.log('hi brother no one help',port);
})