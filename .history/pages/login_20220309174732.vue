<template>
  <div>

    <h1> Log In </h1>
        <v-row justify="center" align="center">
            <v-col cols="auto">
                <v-text-field v-model="loginForm.username" label="Username" required />
                <v-text-field v-model="loginForm.username" label="Username" required />
                <v-btn @click="login()">Log In</v-btn>
            </v-col>
        </v-row>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data () {
    return {
      loginForm: {
          username: '',
          password: ''
      }
    }
  },
  methods: {
    login () {
      this.$store.dispatch('accounts/login', {
        username: 'aedawess',
        password: 'superSecretPassword'
      })
      this.$router.push('/home')
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