const forms= require('../database/forms')

module.exports = function (pool) {
	return {
		async addGuest (req, res) {
			const {guestName, guestEmail} = req.enforcer.body
            const accountId = req.user.id
			const added = await guests.addGuest(pool, accountId, guestName, guestEmail)
			if (added) {
				res.set('location', '/api/' + accountId + '/addguest')
					.enforcer
					.status(201)
					.send()
			} else {
				res.enforcer.status(409).send()
			}
		}
	}
}