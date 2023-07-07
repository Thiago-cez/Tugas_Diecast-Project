const express = require('express');
const server = express();

const mainLineA2023 = require('./src/data/mainLineA2023.json');
const mainLineB2023 = require('./src/data/mainLineB2023.json');
const mainLineC2023 = require('./src/data/mainLineC2023.json');


server.get('/', (req,res) => {
    return res.json({mensagem: "Our API IS WORKING!!!"})
});

server.get('/A', (req,res) => {
    return res.json(mainLineA2023);
});

server.get('/B', (req,res) => {
    return res.json(mainLineB2023);
});

server.get('/C', (req,res) => {
    return res.json(mainLineC2023);
});

server.listen(3000, () => {
    console.log("server Working!!!")
});
