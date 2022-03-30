exports.addSite = async function (client, coupleName, couplePhotoOne, addressOne, addressOnePhoto, addressTwo, addressTwoPhoto, couplePhotoTwo, addRegistryLink) {
    const {rowCount} = await client.query({
        name: 'add-site',
        text: 'INSERT INTO forms (coupleName, couplePhotoOne, addressOne, addressOnePhoto, addressTwo, addressTwoPhoto, couplePhotoTwo, addRegistryLink) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) ON CONFLICT DO NOTHING',
        values: [
            coupleName, 
            couplePhotoOne, 
            addressOne, 
            addressOnePhoto, 
            addressTwo, 
            addressTwoPhoto, 
            couplePhotoTwo, 
            addRegistryLink
        ]
    })
    return rowCount > 0 ? accountId : undefined
}