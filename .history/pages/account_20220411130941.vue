<template>
  <div class="main">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6" id="colmn">
        <v-card elevation="5" class="card">
            <v-card-title id="title"> Make Changes to Your Account </v-card-title>
            <v-card-text justify="center">
                <label for="input"> Enter New Username </label>
                <v-text-field class="input" v-model="username" label="Username" required />
                <v-btn class="buttons" @click="updateAccount()">Update Account</v-btn>
                <v-btn class="buttons" id="deleteBtn" @click="deleteAccount()">Delete Account</v-btn>
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
    updateAccount () {
      this.$store.dispatch('accounts/updateAccount', {
        username: this.username,
      })
      .catch(() => {
          alert("Update Failed")
          console.error("Update Failed")
      })
    },
    deleteAccount () {
      this.$store.dispatch('accounts/deleteAccount')
    .then(() => {
        this.$router.push('/')
    })
    .catch(() => {
        alert("Delete Failed")
        console.error("Delete Failed")
      })
    },
  },
  computed:{
      home(){
        console.log("Here: " + this.$store.state.accounts.content)
          return this.$store.state.accounts.content
      }
  }
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

  .card{
        padding: 50px;
        border-radius: 25px;
        text-align: center !important;
        background-color: #C89D83 !important;
    }

  .buttons {
    margin-top: 30px;
    border-radius: 15px;
    height: 50px !important;
    width: 200px;
    background-color: #F5F4F0 !important;
    font-size: 15px;
    color: #C89D83;
  }

  #deleteBtn{
    background-color: rgb(99, 51, 51) !important;
    color: #F5F4F0;
  }
</style>