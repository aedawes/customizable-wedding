<template>
  <div>
    <v-btn @click="load()">Load</v-btn>

    <h1>Authentication</h1>
    <v-btn @click="login()">Log In</v-btn>
    <v-btn @click="logout()">Log Out</v-btn>

    <div v-if="user !== null">
      Logged in as {{user}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      text: ''
    }
  },
  methods: {
    login () {
      this.$store.dispatch('accounts/login', {
        username: 'aedawes',
        password: 'superSecretPassword'
      })
    },
    logout () {
      this.$store.dispatch('accounts/logout')
    }
  },
  computed: {
    user () {
      return this.$store.state.accounts.user
    }
  }
}
</script>