<template>
    <div class="main">
        <div class="behind"></div>
        <v-row justify="center" align="center">
            <v-col cols="12" sm="8" md="6">
                <v-card elevation="5" class="card">
                    <v-card-title justify="center" class="justify-center">
                        <h1> Create Account </h1>
                    </v-card-title>
                    <v-card-text justify="center">
                        <!-- <p v-if="createAccount() === false"> Passwords do not match </p> -->
                        <v-text-field class="input" v-model="loginForm.username" label="Username" required />
                        <v-text-field class="input" v-model="loginForm.password" type="password" label="Password" required />
                        <v-text-field class="input" v-model="loginForm.passConf" type="password" label="Password" required />
                        <v-btn class="button" @click="createAccount()">Create Account</v-btn>
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
          password: '',
          passConf: ''
      }
    }
  },
  methods: {
    async createAccount () {
        const success = await this.$store
            .dispatch("accounts/createAccount", {
            username: this.loginForm.username,
            password: this.loginForm.password,
            passConf: this.loginForm.passConf
        });
        if (success === 'success'){
            this.$router.push("/login")
        }
        else{
            debugger
            return false
        }
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
        margin-top: 175px !important;
    }

    .card{
        padding: 50px;
        border-radius: 25px;
        text-align: center !important;
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

</style>