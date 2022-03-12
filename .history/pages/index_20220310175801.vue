<template>
  <div>

    <h1>Welcome</h1>
    <h2>Create a website tailored to your wedding</h2>
    <v-btn @click="createAccount()">Create an Account</v-btn>
    <v-btn @click="login()">Log In</v-btn>

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
      this.$router.push('/login')
    },
    createAccount () {
      this.$router.push('/createAccount')
    }
  },
}
</script>