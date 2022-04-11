<template>
    <div class="main" id="content">
        <div class="behind"></div>
        <v-row justify="center" align="center">
            <v-col cols="12" sm="8" md="6">
                <v-card elevation="5" class="card">
                  <v-btn @click="backbutton()" text justify="left"><v-icon>mdi-arrow-left-circle</v-icon></v-btn>
                    <v-card-title justify="center" class="justify-center">
                        <h1> Log In </h1>
                    </v-card-title>
                    <v-card-text justify="center">
                        <v-text-field class="input" v-model="loginForm.username" label="Username" required />
                        <v-text-field class="input" v-model="loginForm.password" type="password" label="Password" required />
                        <div class="centerbtn">
                          <v-btn class="button" @click="login()">Log In</v-btn>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
  name: 'LoginPage',
  middleware:[
    "lastRoute"
  ],
  data () {
    return {
      loginForm: {
          username: '',
          password: ''
      }
    }
  },
  methods: {
    backbutton(){
        this.$router.push(this.$store.getters['routeHistory/last'])
    },
    login () {
      console.log("This One: " + this.$store.dispatch('accounts/getHome', this.loginForm.username))
      this.$store.dispatch('accounts/login', {
        username: this.loginForm.username,
        password: this.loginForm.password
      })
      .then(() => {
        this.$router.push('/home/' + this.loginForm.username)
      })
      .catch(() => {
          console.error("Login Failed")
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

<style scoped>
    .main{
        margin-top: 115px !important;
    }

    .card{
        padding: 50px;
        border-radius: 25px;
        /* text-align: center !important; */
        background-color: #C89D83 !important;
    }

    .card h1 {
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .button{
        margin-top: 30px;
        border-radius: 15px;
        height: 50px !important;
        width: 200px;
        background-color: #F5F4F0 !important;
        font-size: 15px;
        color: #C89D83;
    }

    .centerbtn{
      text-align: center;
    }

  #content{
    left: 200px;
    top: 50px;
  }

</style>