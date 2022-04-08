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
    setGuests(state, content){
        state.content = content
    }
}

//actions--------------------------------------------------------------
export const actions = {
    //addGuest
    async addGuest ({commit, state}, { guestName, guestEmail}){
        let theUsername = state.user.substring(1, (state.user.length - 1))
        const res = await axios.put('api/guests/' + theUsername + '/addguest', {
            guestName,
            guestEmail
        })
        console.log(res.status)
        if (res.status === 200) {
            return "success"
        }
        else{
            return "fail"
        }
    },
    //deleteGuest
    async deleteGuest ({commit, state}, item){
        let theUsername = getUserFromCookie()
        theUsername = theUsername.substring(1, (theUsername.length - 1))
        const res = await axios.delete(`api/guests/${ item.guestEmail }`)
        if (res.status === 204) {
            commit('setUser', null)
        }
    },
    async getGuests ({commit, state}, accountId){
        const res = await axios.get(`/api/guests/${ accountId }`)
        if (res.status === 200) {
            commit('setGuests', res.data)
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