const express = require('express');
const { contentType } = require('express/lib/response');
const app = express();
const port = 3000;

app.use((req, res, next) => {
    console.log(req.method + ' ' + req.path);
    next();
})

app.use(express.json())
app.use(express.text())

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.post('/', (req, res) => {
    if (req.get('content-type') === 'application/json') {
        res.json({content: 'application/json', requestBody: req.body});
    }

    else if (req.get('content-type') === 'text/plain') {
        res.json({content: 'text/plain', requestBody: req.body});
    }
    else{
        req.status(400).send("body is not text/plain nor applicaiton/json")
    }
    console.log('Body: ', req.body);
})

app.listen(3000)