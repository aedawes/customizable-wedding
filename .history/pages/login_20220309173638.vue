<template>
  <div>

    <h1> Log In </h1>
    <form>
        <v-btn @click="login()">Log In</v-btn>
    </form>

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