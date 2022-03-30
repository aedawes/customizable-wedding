const forms= require('../database/forms')

module.exports = function (pool) {
	return {
		async addSite (req, res) {
			const {coupleName, addressOne, addressTwo, addRegistryLink} = req.enforcer.body
            const accountId = req.user.id
			const added = await forms.addSite(pool, accountid, coupleName, addressOne, addressTwo, addRegistryLink)
			if (added) {
				res.set('location', '/api/home/' + accountId)
					.enforcer
					.status(201)
					.send()
			} else {
				res.enforcer.status(409).send()
			}
		}
	}
}