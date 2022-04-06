import axios from 'axios';

//state---------------------------------------------------------------
export const state = () => {
    return {
        user: getUserFromCookie(),
        content: {}
    }
}

//mutations------------------------------------------------------------
export const mutations = {
    setUser (state, user) {
        state.user = user
    },
    setHome(state, content){
        state.content = content
    }
}

//actions--------------------------------------------------------------
export const actions = {
    async getHome ({commit, state}, accountId){
        const res = await axios.get(`/api/home/${ accountId }`)
        if (res.statues === 200) {
            commit('setHome', res.data)
        }
    }
}

//Check if the user cookie is set and if so get the cookie value.
//This cookie is set in addition to the session cookie when the user authenticated, but this cookie is made accessible to the browser's JS
function getUserFromCookie () {
    const re = new RegExp("user=([^;]+)") 
    const value = re.exec(document.cookie)
    return value != null ? unescape(value[1]) : null
}