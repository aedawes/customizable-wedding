export default async function init ({ store }) {
    await store.dispatch('forms/getHome')
    console.log('loaded')
}