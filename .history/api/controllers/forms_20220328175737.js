const forms= require('../database/forms')

module.exports = function (pool) {
	return {
		async addSite (req, res) {
			const {coupleName, couplePhotoOne, addressOne, addressOnePhoto, addressTwo, addressTwoPhoto, couplePhotoTwo, addRegistryLink} = req.enforcer.body
			const accountId = await forms.addSite(pool, coupleName, couplePhotoOne, addressOne, addressOnePhoto, addressTwo, addressTwoPhoto, couplePhotoTwo, addRegistryLink)
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