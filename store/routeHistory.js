export const state = () => {
    return {
        history: []
    }
}

export const mutations = {
    addHistory (state, path) {
        const h = state.history.slice()
        h.push(path)
        state.history = h
    }
}

export const getters = {
    last(state){
        return state.history[state.history.length - 1]
    }
}