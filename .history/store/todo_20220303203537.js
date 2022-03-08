export const state = () => ({
    list: []
})

export const mutations = {
    add(state, text) {
        state.list.push({
            text,
            done: false
        })
    },
    remove(state, { todo }) {
        state.list.splice(state.list.indexOf(todo), 1)
    },
    toggle(state, todo) {
        todo.done = !todo.done
    }
}

export const actions = {
    getList ({ commit, state }) {
        console.log('Making ajax call')
        const list = [
            { done: false, text: 'Item 1'},
            { done: false, text: 'Item 2'},
            { done: false, text: 'Item 3'}
        ]
        list.forEach(item => {
            commit('add', item)
        })
        // commit('remove', )

    }
}