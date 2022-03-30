const bcrypt = require('bcryptjs')
const uuid = require('uuid').v4  //fixme: My version is 8.3.1 which may cause issues...

exports.createAccount = async function (client, username, password) {
    const accountId = uuid()
    const salt = await bcrypt.genSalt(10)
    const {rowCount} = await client.query({
        name: 'create-account',
        text: 'INSERT INTO accounts (account_id, username, password) VALUES ($1, $2, $3) ON CONFLICT DO NOTHING',
        values: [
            accountId,
            username,
            await bcrypt.hash(password, salt)	
        ]
    })
    return rowCount > 0 ? accountId : undefined
}

exports.getAccount = async function (client, accountId) {
    const {rows} = await client.query({
        name: 'get-account-by-id',
        text: 'SELECT * FROM accounts WHERE account_id=$1',
        values: [accountId]
    })
    return rows
}

exports.getHome = async function (client, accountId) {
    const { rows } = await client.query({
        name: 'get-home-by-id',
        text: 'SELECT * FROM forms WHERE userid=$1',
        values: [accountId]
    })
    console.log("HERE!: " + rows[0].userid)
    return rows[0]
}

exports.getAccountByUsername = async function (client, username) {
    const { rows } = await client.query({
        name: 'get-account-by-username',
        text: 'SELECT * FROM accounts WHERE username=$1',
        values: [username]
    })
    return rows[0]
}

exports.updateAccount = async  function (client, accountId, data) {
    // create dynamic query based on inputs
    const {username, password} = data
    const values = []
    const sets = []

    if (username !== undefined) {
        values.push(username)
        sets.push('username=$' + values.length)
    }

    if (password !== undefined) {
        const salt = await bcrypt.genSalt(10)
        let pass = await bcrypt.hash(password, salt)
        values.push(pass)
        sets.push('password=$' + values.length)
    }

    // if no properties were passed in then there is nothing to update
    if (values.length === 0) return await exports.getAccount(client, accountId)

    values.push(accountId)
    const {rows} = await client.query({
        name: 'update-account',
        text: 'UPDATE accounts SET ' + sets.join(', ') + ' WHERE account_id=$' + (values.length) + ' RETURNING *',
        values
    })
    return rows
}

exports.deleteAccount = async function (client, accountId) {
    const {rowCount} = await client.query({
        name: 'delete-account',
        text: 'DELETE FROM accounts WHERE account_id=$1',
        values: [accountId]
    })
    return rowCount > 0
}

//packag.json old

// "@nuxtjs/axios": "^5.13.6",
//     "bcryptjs": "^2.4.3",
//     "chai": "^4.3.6",
//     "connect-pg-simple": "^7.0.0",
//     "core-js": "^3.19.3",
//     "dotenv": "^16.0.0",
//     "express": "^4.17.2",
//     "express-session": "^1.17.2",
//     "mocha": "^9.2.0",
//     "multer": "^1.4.4",
//     "nuxt": "^2.15.8",
//     "openapi-enforcer": "^1.17.0",
//     "openapi-enforcer-middleware": "^2.2.0",
//     "passport": "^0.5.2",
//     "passport-local": "^1.0.0",
//     "pg": "^8.7.3",
//     "supertest": "^6.2.2",
//     "uuid": "^8.3.2",
//     "vue": "^2.6.14",
//     "vue-server-renderer": "^2.6.14",
//     "vue-template-compiler": "^2.6.14",
//     "vuetify": "^2.6.1",
//     "webpack": "^4.46.0"