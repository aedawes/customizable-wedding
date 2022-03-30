const bcrypt = require('bcryptjs')
const uuid = require('uuid').v4

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