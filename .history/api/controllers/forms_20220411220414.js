const forms= require('../database/forms')

module.exports = function (pool) {
	return {
		async addForm (req, res) {
			const {coupleName, addressOne, addressTwo, addRegistryLink} = req.enforcer.body
            const accountId = req.user.id
			const added = await forms.addSite(pool, accountId, coupleName, addressOne, addressTwo, addRegistryLink)
			if (added) {
				res.set('location', '/api/forms')
					.enforcer
					.status(200)
					.send()
			} else {
				res.enforcer.status(409).send()
			}
		},
		async updateForm(req, res) {
			const data = req.enforcer.body
			const username = req.user.id

			const client = await pool.connect()
			try {
				await client.query('BEGIN')
				let account = await accounts.getAccountByUsername(client, username)
				if (account === undefined) {
					res.enforcer.status(404).send()
				}
				else if (account.account_id !== req.user.id){
					res.enforcer.status(403).send()
				} else {
					await accounts.updateAccount(client, req.user.id, data)
					res.enforcer.status(200).send({
                        username: data.username
                    })
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