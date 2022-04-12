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
        const res = await axios.put('api/forms', {
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
    },
    async updateForm ({commit, state}, { coupleName, addressOne, addressTwo, addRegistryLink }){
        let theUsername = getUserFromCookie()
        theUsername = theUsername.substring(1, (theUsername.length - 1))
        // let toSend = ''
        // if(coupleName !== ''){
        //     toSend.push(coupleName)
        // }
        // if(addressOne !== ''){
        //     toSend.push(addressOne)
        // }
        // if(addressTwo !== ''){
        //     toSend.push(addressTwo)
        // }
        // if(addRegistryLink !== ''){
        //     toSend.push(addRegistryLink)
        // }
        const res = await axios.put(`api/forms/${ theUsername }`, {
            coupleName,
            addressOne,
            addressTwo,
            addRegistryLink
        })
        if (res.status === 200) {
            commit('setUser', getUserFromCookie())
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