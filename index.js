// const { application } = require("express");

const express = require("express")
const cors = require('cors')
const app = express();
 const port = 5000;

 app.use(cors());

const Catagroy = require('./data/Catagroy.json')
const news = require('./data/news.json')

app.get('/',(req, res)=>{
    res.send('abdullah ')
});

app.get('/news-Catagroy',(req, res)=>{
    res.send(Catagroy)
});
app.get('/news',(req, res)=>{
    res.send(news)
});

app.get('/news-catagroy/:id', (req,res)=>{
    const id = req.params.id;
        const catagroy_Catagroy =  Catagroy.filter(n => n.id == id);
        res.send(catagroy_Catagroy)
    
      
  
})

app.get('/news/:id', (req, res)=>{
  const id = req.params.id;
  const selectNews =  news.find( n => n._id === id);
  res.send(selectNews)
});

app.listen(port,()=>{
    console.log('hi brother no one help',port);
})