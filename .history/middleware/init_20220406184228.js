export default async function init ({ store }) {
    await store.dispatch('accounts/getHome')
    console.log('loaded')
}