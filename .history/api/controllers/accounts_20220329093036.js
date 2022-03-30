const accounts = require('../database/accounts')

module.exports = function (pool) {
	return {
		async createAccount (req, res) {
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
		},

		async updateAccount (req, res) {
			const data = req.enforcer.body
			const {username} = req.enforcer.params

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

		async deleteAccount (req, res) {
			const { username } = req.enforcer.params
			const client = await pool.connect()
			try {
				await client.query('BEGIN')
				let account = await accounts.getAccountByUsername(client, username)
				if (account === undefined) {
					res.enforcer.status(404).send()
				} else if (account.account_id !== req.user.id) {
					res.enforcer.status(403).send()
				} else {
					await accounts.deleteAccount(client, account.account_id)
					res.enforcer.status(204).send()
				}
				await client.query('COMMIT')
			} catch (e) {
				await client.query('ROLLBACK')
				throw e
			} finally {
				client.release()
			}
		},
		async getHome (req, res) {
			const client = await pool.connect()   					//set pool to client
			const accountId = req.user.id 							//set account Id to current user
			const siteInfo = accounts.getHome(client, accountId)    //set the siteInfo to the correct row in forms
			if (accountId) {
				res.enforcer.status(200).send({	
					coupleName: siteInfo.coupleName,
					addressOne: siteInfo.addressOne,
					addressTwo: siteInfo.addressTwo,
					addRegistryLink: siteInfo.addRegistryLink
				})
			} else{
				res.enforcer.status(404).send()
			}
		}
	}
}