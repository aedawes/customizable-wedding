
exports.addGuest = async function (client, accountId, guestName, guestEmail) {
    const {rowCount} = await client.query({
        name: 'add-guest',
        text: 'INSERT INTO guests (userid, guestName, guestEmail) VALUES ($1, $2, $3) ON CONFLICT DO NOTHING',
        values: [
            accountId,
            guestName, 
            guestEmail
        ]
    })
    return rowCount > 0 ? true: false
}

exports.getGuests = async function (client, accountId) {
    const { rows } = await client.query({
        name: 'get-guests-by-id',
        text: 'SELECT * FROM guests WHERE userid=$1',
        values: [accountId]
    })
    return rows
}

exports.getGuestByEmail= async function (client, email) {
    const { rows } = await client.query({
        name: 'get-guest-by-email',
        text: 'SELECT * FROM guests WHERE guestemail=$1',
        values: [email]
    })
    return rows[0]
}

exports.deleteGuest = async function (client, email) {
    const {rowCount} = await client.query({
        name: 'delete-guest',
        text: 'DELETE FROM guests WHERE guestemail=$1',
        values: [email]
    })
    return rowCount > 0
}