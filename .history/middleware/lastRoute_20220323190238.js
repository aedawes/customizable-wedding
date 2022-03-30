export default function ({ redirect, store, from }) {
    console.log(from)
    store.commit("routeHistory/addHistory", from.path)
}