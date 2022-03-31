const forms= require('../database/forms')

module.exports = function (pool) {
	return {
		async updateForm (req, res) {
			const {coupleName, addressOne, addressTwo, addRegistryLink} = req.enforcer.body
            const accountId = req.user.id
			const added = await forms.addSite(pool, accountId, coupleName, addressOne, addressTwo, addRegistryLink)
			if (added) {
				res.set('location', '/api/forms')
					.enforcer
					.status(200)
					.send({	
						coupleName: siteInfo.couplename,
						addressOne: siteInfo.addressone,
						addressTwo: siteInfo.addresstwo,
						addRegistryLink: siteInfo.addregistrylink
					})
			} else {
				res.enforcer.status(409).send()
			}
		}
	}
}