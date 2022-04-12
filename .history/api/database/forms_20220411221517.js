
exports.addSite = async function (client, accountId, coupleName, addressOne, addressTwo, addRegistryLink) {
    const {rowCount} = await client.query({
        name: 'add-site',
        text: 'INSERT INTO forms (userid, coupleName, addressOne,  addressTwo, addRegistryLink) VALUES ($1, $2, $3, $4, $5) ON CONFLICT DO NOTHING',
        values: [
            accountId,
            coupleName,  
            addressOne, 
            addressTwo, 
            addRegistryLink
        ]
    })
    return rowCount > 0 ? true: false
}

exports.updateForm = async  function (client, accountId, data) {
    // create dynamic query based on inputs
    const {coupleName, addressOne, addressTwo, addRegistryLink} = data
    const values = []
    const sets = []

    if (coupleName !== undefined) {
        values.push(coupleName)
        sets.push('couplename=$' + values.length)
    }

    if (addressOne !== undefined) {
        values.push(addressOne)
        sets.push('addressone=$' + values.length)
    }

    if (addressTwo !== undefined) {
        values.push(addressTwo)
        sets.push('addresstwo=$' + values.length)
    }

    if (addRegistryLink !== undefined) {
        values.push(addRegistryLink)
        sets.push('addregistrylink=$' + values.length)
    }

    // if no properties were passed in then there is nothing to update
    if (values.length === 0) return await exports.getAccount(client, accountId)

    values.push(accountId)
    const {rows} = await client.query({
        name: 'update-forms',
        text: 'UPDATE forms SET ' + sets.join(', ') + ' WHERE account_id=$' + (values.length) + ' RETURNING *',
        values
    })
    return rows
}

exports.getFormByUserId = async function (client, accountId) {
    const { rows } = await client.query({
        name: 'get-form-by-userid',
        text: 'SELECT * FROM Forms WHERE userid=$1',
        values: [userid]
    })
    return rows[0]
}