const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use( express.static(publicPath) );

app.listen(process.env.PORT || 3000, 
	() => console.log("Servidor funcionando en el puerto " + process.env.PORT));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'))
})

app.get('/home', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/material', (req,res)=>{
    res.sendFile(__dirname + '/views/material.html');
});

app.get('/lecciones', (req,res)=>{
    res.sendFile(__dirname + '/views/lecciones.html');
});

app.get('/progresiones', (req,res)=>{
    res.sendFile(__dirname + '/views/progresiones.html');
});

app.get('/guitarras', (req,res)=>{
    res.sendFile(__dirname + '/views/guitarras.html');
});