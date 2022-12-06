const express = require('express');
const app = express()

const db = require('./models/db')

app.get('/', async(req, res)=>{
    res.send("Pagina Inicial Jhn!");
});

app.post('/', async(req, res)=>{
    res.send("Pagina cadastrar");
});

app.listen(8080, ()=>{
    console.log(`Servido iniciado na porta 8080:http//localhost:8080`)
})