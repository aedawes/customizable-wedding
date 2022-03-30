const forms= require('../database/forms')

module.exports = function (pool) {
	return {
		async addSite (req, res) {
			const {coupleName, addressOne, addressTwo, addRegistryLink} = req.enforcer.body
			const accountId = await forms.addSite(pool, coupleName, addressOne, addressTwo, addRegistryLink)
			if (accountId) {
				res.set('location', '/api/forms/' + accountId)
					.enforcer
					.status(201)
					.send()
			} else {
				res.enforcer.status(409).send()
			}
		}
	}
}