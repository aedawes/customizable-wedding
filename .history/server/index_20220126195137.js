// const express = require('express');
// const { contentType } = require('express/lib/response');
// const app = express();
// const port = 3000;

// app.use((req, res, next) => {
//     console.log(req.method + ' ' + req.path);
//     next();
// })

// app.use(express.json())

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// })

// app.post('/', (req, res) => {
//     if (req.get('content-type') === 'application/json') {
//         res.json({content: 'application/json', requestBody: req.body});
//     }

//     else if (req.get('content-type') === 'text/plain') {
//         res.json({content: 'text/plain', requestBody: req.body});
//     }
//     else{
//         req.status(400).send("body is not text/plain nor applicaiton/json")
//     }
//     console.log('Body: ', req.body);
// })

// app.listen(3000)

const express = require('express');
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
    if (req.get('Content-Type') === 'application/json') {
        console.log('Body: ', 'application/json ', req.body);
        res.json({content: 'application/json', requestBody: req.body})
        res.send('OK')
    }
    else if (req.get('Content-Type') === 'text/plain') {
        console.log('Body: ', 'text/plain ', req.body);
        res.json({content: 'text/plain', requestBody: req.body})
        res.send('OK')
    }
    else {
        console.log('Body: ', req.body);
        res.status(400).send("Body is not the correct content type.");
    }
})

app.listen(3000)