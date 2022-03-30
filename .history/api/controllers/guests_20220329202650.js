const guests= require('../database/guests')

module.exports = function (pool) {
	return {
		async addGuest (req, res) {
			const {guestName, guestEmail} = req.enforcer.body
            const accountId = req.user.id
			const username = req.user.username
			const added = await forms.addSite(pool, accountId, guestName, guestEmail)
			if (added) {
				res.set('location', '/api/forms')
					.enforcer
					.status(200)
					.send()
			} else {
				res.enforcer.status(409).send()
			}
		},
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