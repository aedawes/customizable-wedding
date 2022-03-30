
exports.addSite = async function (client, accountId, coupleName, addressOne, addressTwo, addRegistryLink) {
    console.log(accountId, coupleName, addressOne, addressTwo, addRegistryLink);
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