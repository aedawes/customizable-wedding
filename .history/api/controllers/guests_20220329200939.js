const guests= require('../database/guests')

module.exports = function (pool) {
	return {
		async getGuests (req, res) {
			const accountId = req.user.id
			const siteInfo = await accounts.getHome(pool, accountId)
			if (accountId) {
				res.enforcer.status(200).send({	
					coupleName: siteInfo.couplename,
					addressOne: siteInfo.addressone,
					addressTwo: siteInfo.addresstwo,
					addRegistryLink: siteInfo.addregistrylink
				})
			} else{
				res.enforcer.status(404).send()
			}
		}
	}
}