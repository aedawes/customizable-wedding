<template>
  <div>
    <v-row justify="center" align="center">
        <v-col cols="12" sm="8" md="6">
            <v-card elevation="5">
                <v-card-title justify="center">
                    <h1> Log In </h1>
                </v-card-title>
                <v-card-text justify="center">
                    <v-text-field v-model="loginForm.username" label="Username" required />
                    <v-text-field v-model="loginForm.password" label="Password" required />
                    <v-btn @click="login()">Log In</v-btn>
                </v-card-text>
            </v-card>
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
        username: this.loginForm.username,
        password: this.loginForm.password
      })
      .then(() => {
          this.$router.push('/home')
      })
      .catch(() => {
          concole.error("Login Failed")
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