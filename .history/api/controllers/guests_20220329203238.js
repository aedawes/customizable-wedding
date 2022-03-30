const guests= require('../database/guests')

module.exports = function (pool) {
	return {
		async addGuest (req, res) {
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
			if (accountId) {
				res.enforcer.status(200).send({	
					guestname: guestList.guestname,
					guestemail: guestList.guestEmail
				})
			} else{
				res.enforcer.status(404).send()
			}
		}
	}
}