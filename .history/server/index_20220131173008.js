const Enforcer = require('openapi-enforcer')
const EnforcerMiddleware = require('openapi-enforcer-middleware')
const express = require('express')

async function run () {
  const app = express()
  
  // Any paths defined in your openapi.yml will validate and parse the request
  // before it calls your route code.
  const enforcer = await()
  const enforcerMiddleware = EnforcerMiddleware(await Enforcer('./openapi.yml'))
  app.use(enforcerMiddleware.init())
  
  // Catch errors
  enforcerMiddleware.on('error', err => {
    console.error(err)
    process.exit(1)
  }) 
  
  // If your openapi.yml file defines this path then this path will only
  // execute when the request is valid otherwise it will send back a 400
  // with a message describing why the request was invalid.
  app.get('/api/users/:userId', (req, res) => {
    // OLD WAY: get the userId as a string
    const userIdOldWay = req.params.userId  
  
    // BETTER WAY: get the userID as the type defined in your openapi.yml file
    const userId = req.enforcer.params.userId
  
    // ... do some processing
  
    // validate, serialize, and send a response that follows your openapi.yml file
    res.enforcer.send({
      userId,
  
      // The date object will serialize to the correct format, according to your
      // openapi.yml file.  Most likely this will be either the openapi format
      // `date` or `date-time`.
      birthDate: new Date('2000-01-01') 
    })
    
  })
  
  app.listen(3000)
}

run().catch(console.error)

//--------------------------------------------------------------------------------------------

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
        res.status(400).send("body is not text/plain nor applicaiton/json")
    }
    console.log('Body: ', req.body);
})

app.listen(3000)