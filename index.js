const express = require('express');
const data = require('./data.json');
const { writeFile } = require('node:fs/promises');


const app = express();
app.set('view engine', 'ejs');


app.get('/', async(req, res, next)=>{
    res.render("pages/home", {'data': data.homepage.username})
})

app.get('/services', async(req, res, next)=>{
    res.render("pages/services", {'data': data.services})
})
app.get('/contact', async(req, res, next)=>{
    res.render("pages/contact", {'contact': data.contact})
})

app.listen(4000, ()=>{
    console.log('Running on Port 4000')
})