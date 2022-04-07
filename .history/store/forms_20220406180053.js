import axios from 'axios';

//state---------------------------------------------------------------
export const state = () => {
    return {
        user: getUserFromCookie(),
    }
}

//mutations------------------------------------------------------------
export const mutations = {
    setUser (state, user) {
        state.user = user
    },
}

//actions--------------------------------------------------------------
export const actions = {
    async setForm ({commit, state}, { coupleName, addressOne, addressTwo, addRegistryLink}){
        const res = await axios.post('forms', {
            coupleName,
            addressOne,
            addressTwo,
            addRegistryLink
        })
        if (res.status === 200) {
            return "success"
        }
        else{
            return "fail"
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