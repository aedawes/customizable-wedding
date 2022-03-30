require('dotenv').config('../.env')

const Enforcer              = require('openapi-enforcer')
const EnforcerMiddleware    = require('openapi-enforcer-middleware')
const {Pool}                = require('pg')
const express               = require('express')
const path                  = require('path')
const Accounts              = require('./controllers/accounts')
const Authentication        = require('./controllers/authentication')
const Forms                 = require('./controllers/forms')
// const Guests = require('./controllers/guests')
const bcrypt                = require('bcryptjs')
const LocalStrategy         = require('passport-local').Strategy;
const passport              = require('passport');
const session               = require('express-session');
const DatabaseAccounts      = require('./database/accounts')
const ConnectPgSimple       = require('connect-pg-simple')(session)

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

passport.use(new LocalStrategy((username, password, done) => {
	DatabaseAccounts.getAccountByUsername(pool, username)
		.then(async account => {
			// if no account with the username was found then authentication failed
			if (account === undefined) {
				done(null, false)
			} else {
				// compare encrypted password
				const match = await bcrypt.compare(password, account.password)
				if (match) {
					// passwords matched, so create the user object
					done(null, { id: account.account_id, username: account.username})
				} else {
					const hash = await bcrypt.hash(password, 10)
					const m2 = await bcrypt.compare(password, hash)

					// passwords did not match
					done(null, false)
				}
			}
		})
		.catch(e => done(e, null))
}))

passport.serializeUser((user, done) => {
	done(null, JSON.stringify(user))
})

passport.deserializeUser((id, done) => {
	done(null, JSON.parse(id))
})

// const app = express()

// Any paths defined in your openapi.yml will validate and parse the request
// before it calls your route code.
const openapiPath = path.resolve(__dirname, '../openAPI.yml')
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

app.use(session({
	store: new ConnectPgSimple({
		pool
	}),
	secret: process.env.SESSION_SECRET,
	resave: false,
	saveUninitialized: true,
	cookie: {
		maxAge: 2592000000 // 30 days, written in milliseconds
	}
}))

app.use(passport.initialize())
app.use(passport.session())

app.use((req, res, next) => {
	const { operation } = req.enforcer
	if (operation.security !== undefined) {
		const sessionIsRequired = operation.security.find(obj => obj.cookieAuth !== undefined)
		if (sessionIsRequired && !req.user) {
			res.sendStatus(401)
			return
		}
	}
	next()
})

app.use(enforcerMiddleware.route({
	accounts: Accounts(pool),
	authentication: Authentication(passport),
	forms: Forms(pool)
}))

//add fallback mocking middleware here
// app.use(enforcerMiddleware.mock())

module.exports = app






// const cookieParser      = require('cookie-parser');
// const express           = require('express');
// const LocalStrategy     = require('passport-local').Strategy;
// const passport          = require('passport');
// const session           = require('express-session');

// // initialize express app
// const app = express();

// // tell passport to use a local strategy and tell it how to validate a username and password
// passport.use(new LocalStrategy(function(username, password, done) {
//     if (username && password === 'pass') return done(null, { username: username });
//     return done(null, false);
// }));

// // tell passport how to turn a user into serialized data that will be stored with the session
// passport.serializeUser(function(user, done) {
//     done(null, user.username);
// });

// // tell passport how to go from the serialized data back to the user
// passport.deserializeUser(function(id, done) {
//     done(null, { username: id });
// });

// // tell the express app what middleware to use
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
// app.use(session({ secret: 'secret key', resave: false, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());

// // home page
// app.get('/', function (req, res) {
//     if (req.user) return res.send('Hello, ' + req.user.username);
//     res.send('Hello, Stranger!');
// });

// // specify a URL that only authenticated users can hit
// app.get('/protected',
//     function(req, res) {
//         if (!req.user) return res.sendStatus(401);
//         res.send('You have access.');
//     }
// );

// // specify the login url
// app.put('/auth/login',
//     passport.authenticate('local'),
//     function(req, res) {
//         res.send('You are authenticated, ' + req.user.username);
//     });

// // log the user out
// app.put('/auth/logout', function(req, res) {
//     req.logout();
//     res.send('You have logged out.');
// });

// // start the server listening
// app.listen(3000, function () {
//     console.log('Server listening on port 3000.');
// });
