<template>
  <div class="main">
    <h1 class="Welcome">Form<span v-if="theName.length > 0">,</span> {{ theName }}</h1>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6" id="colmn">
        <v-card elevation="5" class="card">
            <v-card-title justify="center" class="justify-center">
                <h1> Create Account </h1>
            </v-card-title>
            <v-card-text justify="center">
                <v-text-field class="input" v-model="username" label="Username" required />
                <v-btn class="button" @click="updateAccount()">Create Account</v-btn>
            </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      username: ''
    }
  },
  methods: {
    login () {
      this.$store.dispatch('accounts/updateAccount', {
        username: this.username,
      })
      .catch(() => {
          console.error("Update Failed")
      })
    },
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