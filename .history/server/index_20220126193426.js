const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
    console.log(req.method + ' ' + req.path);
    next();
})

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.post('/', (req, res) => {
    if (req.get('application/json')) {
        res.json({content: 'application/json', requestBody: req.body});
        res.send('application');
    }

    if (req.get('text/plain')){
        res.json({content: 'text/plain', requestBody: req.body});
        es.send('text');
    }
    console.log('Body: ', req.body);
    res.send('OK');
})

app.listen(3000)