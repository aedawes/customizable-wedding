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
        password = bcrypt.hash(password, salt)
        values.push(password)
        sets.push('password=$' + values.length)
    }

    // if no properties were passed in then there is nothing to update
    if (values.length === 0) return await exports.getAccount(client, accountId)

    values.push(accountId)
    const {rows} = client.query({
        name: 'update-account',
        text: 'UPDATE accounts SET ' + sets.join(', ') + ' WHERE account_id=$' + (values.length) + ' RETURNING *',
        values
    })
    return rows
}

exports.deleteAccount = async function (client, accountId) {
    const {rowCount} = client.query({
        name: 'delete-account',
        text: 'DELETE FROM accounts WHERE account_id=$1',
        values: [accountId]
    })
    return rowCount > 0
}