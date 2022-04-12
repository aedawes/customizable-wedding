const forms= require('../database/forms')

module.exports = function (pool) {
	return {
		async updateForm(req, res) {
			const data = req.enforcer.body
			const userid = req.user.id

			const client = await pool.connect()
			try {
				await client.query('BEGIN')
				let form = await forms.getFormByUserid(client, userid)
				if (form === undefined) {
					res.enforcer.status(404).send()
				}
				else if (form.userid !== req.user.id){
					res.enforcer.status(403).send()
				} else {
					await forms.updateForm(client, req.user.id, data)
					res.enforcer.status(200).send({
                        coupleName: data.coupleName,
						addressOne: data.addressOne,
						addressTwo: data.addressTwo,
						addRegistryLink: data.addRegistryLink
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