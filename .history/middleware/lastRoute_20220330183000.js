export default function ({ redirect, store, from }) {
    store.commit("routeHistory/addHistory", from.path)
}