const forms= require('../database/forms')

module.exports = function (pool) {
	return {
		async addSite (req, res) {
			const {username, password} = req.enforcer.body
			const accountId = await accounts.createAccount(pool, username, password)
			if (accountId) {
				res.set('location', '/api/accounts/' + accountId)
					.enforcer
					.status(201)
					.send()
			} else {
				res.enforcer.status(409).send()
			}
		}
	}
}