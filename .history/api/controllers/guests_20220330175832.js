const guests= require('../database/guests')

module.exports = function (pool) {
	return {
		async addGuest (req, res) {  //FIXME: Internal server error but it still adds to the database
			const {guestName, guestEmail} = req.enforcer.body
            const accountId = req.user.id
			const username = req.user.username
			const added = await guests.addGuest(pool, accountId, guestName, guestEmail)
			if (added) {
				res.set('location', '/api/guests/' + username + '/addguest')
					.enforcer
					.status(200)
					.send()
			} else {
				res.enforcer.status(409).send()
			}
		},
		async getGuests (req, res) {
			const accountId = req.user.id
			const guestList = await guests.getGuests(pool, accountId)
			console.log("GUEST NAME: " + guestList.guestname)
			if (accountId) {
					res.enforcer.status(200).send(guestList)
			} else{
				res.enforcer.status(404).send()
			}
		},
		async deleteGuest (req, res) {
			const { guestEmail } = req.enforcer.params 
			try {
				await client.query('BEGIN')
				let guest = await guests.getGuestByEmail(client, guestEmail)
				if (guest === undefined) {
					res.enforcer.status(404).send()
				} else {
					await accounts.deleteGuest(client, guestEmail)
					res.enforcer.status(204).send()
				}
				await client.query('COMMIT')
			} catch (e) {
				await client.query('ROLLBACK')
				throw e
			} finally {
				client.release()
			}
		},
	}
}