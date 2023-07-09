const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const mainLineA2023 = require('./src/data/mainLineA2023.json');
const mainLineB2023 = require('./src/data/mainLineB2023.json');
const mainLineC2023 = require('./src/data/mainLineC2023.json');


app.get('/', (req,res) => {
    return res.json({mensagem: "Our API IS WORKING!!!"})
});

app.get('/A', (req,res) => {
    return res.json(mainLineA2023);
});

app.get('/B', (req,res) => {
    return res.json(mainLineB2023);
});

app.get('/C', (req,res) => {
    return res.json(mainLineC2023);
});

app.listen(port, () => {
    console.log("servidor rodando!!s")
});
