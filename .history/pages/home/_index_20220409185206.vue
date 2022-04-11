<template>
  <div class="main">
        <div class="nameSection">
          <h1 id="coupleName"> {{ home.coupleName }} </h1>
        </div>
        <div class="addressOneSection">
          <div id="photoOne"></div>
          <h1 id="Caption"> The Ceremony </h1>
          <h2 id="theAddress"> {{ home.addressOne }} </h2>
          <div id="photoTwo"></div>
        </div>
        <!-- <v-card elevation="5" class="card">
            <v-card-text justify="center">
                <p> Name: {{ home.coupleName }} </p>
                <p> Address One: {{ home.addressOne }} </p>
                <p> Address Two: {{ home.addressTwo }} </p>
            </v-card-text>
        </v-card> -->
  </div>
</template>

<script>
export default {
  name: 'Home',
  async asyncData ({ params, store }) {
    console.log(params)
    await store.dispatch('accounts/getHome', params.index)
    return {
        form:{
            coupleName: '',

        }
    }
  },
  computed:{
      home(){
          return this.$store.state.accounts.content
      }
  }
}
</script>

<style scoped>
  .main{
    text-align: center !important;
    width: 1700px !important;
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

  .nameSection{
    background-image: url(../../images/Flowers.png);
    background-size: cover;
    height: 950px;
    width: 1700px;
    top: -100px;
  }

  .addressOneSection{
    height: 800px;
    width: 1700px;
  }

  #coupleName{
    padding-top: 375px;
    font-size: 100px;
    color: #F5F4F0;
  }

  #theAddress{
    padding-top: 10px;
  }

  #Caption{
    padding-top: 300px;
  }

  #photoOne{
    background-image: url(../../images/Couple1.png);
    height: 500px;
    width: 500px;
  }
</style>