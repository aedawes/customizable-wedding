<template>
  <div>

    <h1> Log In </h1>
    <v-btn @click="login()">Log In</v-btn>
    <v-btn @click="logout()">Log Out</v-btn>

    <div v-if="user !== null">
      Logged in as {{user}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data () {
    return {
      text: ''
    }
  },
  methods: {
    login () {
      this.$store.dispatch('accounts/login', {
        username: 'aedawess',
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