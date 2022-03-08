require('dotenv').config()

const Enforcer = require('openapi-enforcer')
const EnforcerMiddleware = require('openapi-enforcer-middleware')
const {Pool} = require('pg')
const express = require('express')
const path = require('path')

const app = express()

const pool = new Pool({
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  port: +process.env.POSTGRES_PORT
})

pool.query('SELECT NOW()', (err, res) => {
	if (err) {
		console.error(err)
		process.exit(1)
	} else {
		console.log('Database connected')
	}
})

// Any paths defined in your openapi.yml will validate and parse the request
// before it calls your route code.
const openapiPath = path.resolve(__dirname, '../openapi.yml')
const enforcerPromise = Enforcer(openapiPath, { hideWarnings: true })
const enforcerMiddleware = EnforcerMiddleware(enforcerPromise)

app.use(express.json())

app.use((req, res, next) => {
  console.log(req.method + ' ' + req.path, req.headers, req.body)
  next()
})

app.use(enforcerMiddleware.init({ baseUrl: '/api' }))

// Catch errors
enforcerMiddleware.on('error', err => {
  console.error(err)
  process.exit(1)
}) 

app.use(enforcerMiddleware.route({
	accounts: Accounts(pool),
	forms: Forms(pool),
  guests: Guests(pool)
}))

//   app.use(enforcerMiddleware.route({
//     // The "users" is mapped to via the "x-controller" value.
//     accounts: {
//       // The "listUsers" is mapped to via the "x-operation" or "operationId" value.
//       async login (req, res) {
//         const { rows } = dbClient.query('SELECT * FROM users')
//         const users = rows.map(row => {
//           return {
//             id: row.id,
//             name: row.name,
//             email: row.email
//           }
//         })
//         res.enforcer.send(users)
//       }
//     }
//   }))

// add fallback mocking middleware here
app.use(enforcerMiddleware.mock())

module.exports = app
// const Enforcer = require('openapi-enforcer')
// const EnforcerMiddleware = require('openapi-enforcer-middleware')
// // const enforcerMulter = require('openapi-enforcer-multer')
// const express = require('express')
// const path = require('path')
// // const multer = require('multer')

// exports.server = async function () {
//   const app = express()
  
//   // const enforcer = Enforcer(path.resolve(__dirname, 'people-v2.yml'))
//   // enforcer.controllers(path.resolve(__dirname, 'controllers'))
//   //   .catch(console.error)
  
//   // const upload = multer({
//   //   storage: multer.memoryStorage(),
//   //   limits: {fileSize: 200000}
//   // })

//   // app.use(enforcerMulter(enforcer, upload))
//   // app.use(enforcer.middleware())

//   // const listener = app.listen(3000, err => {
//   //   if(err) return console.errir(err.stack)
//   //   console.log('Server listening on port ' + listener.address().port)
//   // })

//   // Any paths defined in your openapi.yml will validate and parse the request
//   // before it calls your route code.
//   const openapiPath = path.resolve(__dirname, '../openAPI.yml')
//   const enforcer = await Enforcer(openapiPath, { hideWarnings: true })
//   const enforcerMiddleware = EnforcerMiddleware(enforcer)
  
//   app.use(express.json())

// 	app.use((req, res, next) => {
// 		console.log(req.method + ' ' + req.path, req.headers, req.body)
// 		next()
// 	})

//   app.use(enforcerMiddleware.init())
  
//   // Catch errors
//   enforcerMiddleware.on('error', err => {
//     console.error(err)
//     process.exit(1)
//   }) 
  
// //   app.use(enforcerMiddleware.route({
// //     // The "users" is mapped to via the "x-controller" value.
// //     accounts: {
// //       // The "listUsers" is mapped to via the "x-operation" or "operationId" value.
// //       async login (req, res) {
// //         const { rows } = dbClient.query('SELECT * FROM users')
// //         const users = rows.map(row => {
// //           return {
// //             id: row.id,
// //             name: row.name,
// //             email: row.email
// //           }
// //         })
// //         res.enforcer.send(users)
// //       }
// //     }
// //   }))

//   // add fallback mocking middleware here
//   app.use(enforcerMiddleware.mock())

//   return app
// }