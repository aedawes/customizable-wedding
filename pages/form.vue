<template>
  <div class="main">
    <h1 class="Welcome">Form<span v-if="theName.length > 0">,</span> {{ theName }}</h1>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6" id="colmn">
        <h2 class="subIntro">create a website tailored to your wedding</h2>
        <Name @updateName="theName=$event"></Name>
        <v-btn class="buttons" @click="createAccount()">Create an Account</v-btn>
        <v-btn class="buttons" @click="login()">Log In</v-btn>
      </v-col>
    </v-row>

  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      theName: '',
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
    margin-top: 175px !important;
  }

  .Welcome {
    font-size: 100px !important;
    text-align: center;
  }

  .subIntro {
    font-size: 30px !important;
    margin: 20px;
    margin-bottom: 50px;
  }

  .buttons {
    border-radius: 15px;
    height: 75px !important;
    width: 225px;
    margin: 20px;
    background-color: #C89D83 !important;
    font-size: 15px;
    color: #F5F4F0;
  }
</style>