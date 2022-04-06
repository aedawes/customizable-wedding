import axios from 'axios';

//state---------------------------------------------------------------
export const state = () => {
    return {
        user: getUserFromCookie()
    }
}

//mutations------------------------------------------------------------
export const mutations = {
    setUser (state, user) {
        state.user = user
    }
}

//actions--------------------------------------------------------------
export const actions = {
    //login
    async login ({ commit, state }, { username, password }) {
        const res = await axios.put('api/authentication/login', {
            username,
            password
        })
        if (res.status === 200) {
            commit('setUser', getUserFromCookie())
        }
    },

    //logout
    async logout ({ commit }) {
        const res = await axios.put('api/authentication/logout')
        if (res.status === 200) {
            commit('setUser', null)
        }
    },

    //createaccount
    async createAccount ({commit, state}, { username, password, passConf}){
        if(password != passConf){
            return "fail"
        }
        const res = await axios.post('api/accounts', {
            username,
            password
        })
        if (res.status === 201) {
            return "success"
        }
        else{
            return "fail"
        }
    },

    //updateAccount
    async updateAccount ({commit, state}, { username }){
        const res = await axios.put(`api/accounts/${ username }`, {
            username
        })
        if (res.statues === 200) {
            commit('setUser', getUserFromCookie())
        }
    },

    async deleteAccount ({commit, state}, { username }){
        const res = await axios.delete(`api/accounts/${ username }`)
        if (res.status === 204) {
            commit('setUser', null)
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