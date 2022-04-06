<template>
  <div @load="getHome()" class="main">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6" id="colmn">
        <v-card elevation="5" class="card">
            <v-card-text justify="center">
                <p> Name: {{ home.coupleName }} </p>
                <p> Address One: {{ home.addressOne }} </p>
                <p> Address Two: {{ home.addressTwo }} </p>
            </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
        form:{
            coupleName: '',

        }
    }
  },
  methods: {
      getHome () {
      this.$store.dispatch('forms/getHome')
      .catch(() => {
          alert("Get Failed")
          console.error("Get Failed")
      })
    },
  },
  computed:{
      home(){
          return this.$store.state.forms.content
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