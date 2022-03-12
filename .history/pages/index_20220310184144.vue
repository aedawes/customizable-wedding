<template>
  <div class="main">
    <v-row justify="center" align="center">
      <v-col cols="10" sm="8" md="6">
        <h1 class="Welcome">Welcome</h1>
        <h2 class="subIntro">Create a website tailored to your wedding</h2>
        <v-btn @click="createAccount()">Create an Account</v-btn>
        <v-btn @click="login()">Log In</v-btn>
      </v-col>
    </v-row>

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

<style scoped>
  .main{
    text-align: center !important;
  }

  .Welcome {
    font-size: 100px !important;
  }

  .subIntro {
    font-size: 30px !important;
  }
</style>