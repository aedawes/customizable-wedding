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
         <div class="addressTwoSection">
          <div id="photoThree">
            <h1 id="Caption"> The Reception </h1>
            <h2 id="theAddress"> {{ home.addressTwo }} </h2>
          </div>
        </div>
        <div id="reg">
          <h1 id="regCaption"> The Registry </h1>
          <p> {{ home.addRegistryLink}} </p>
          <v-btn href="home.addRegistryLink" id="regBtn"> See our Registry </v-btn>
          <div id="photoFour"></div>
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
    background-image: url(../../images/Flowers1.png);
    background-size: cover;
    height: 950px;
    width: 1700px;
    top: -100px;
  }

  .addressOneSection{
    height: 800px;
    width: 1625px;
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
    position: absolute;
    margin: 50px;
    background-image: url(../../images/Couple1.png);
    background-size: cover;
    height: 700px;
    width: 500px;
  }

  #photoTwo{
    position: absolute;
    /* float: right; */
    margin-top: -344px;
    margin-left: auto; 
    margin-bottom: 50px;
    background-image: url(../../images/Couple3.png);
    background-size: cover;
    height: 700px;
    width: 500px;
    left: 1080px;
  }

  #photoThree{
    background-image: url(../../images/reception.png);
    background-size: cover;
    height: 600px;
    width: 1533px;
    margin: 50px;
    margin-bottom: 100px;
    color: #F5F4F0;
  }

  #photoFour{
    position: absolute;
    margin-top: -344px;
    margin-left: auto; 
    margin-bottom: 50px;
    background-image: url(../../images/reception.png);
    background-size: cover;
    height: 600px;
    width: 800px;
    color: #F5F4F0;
    left: 800px;
  }

  #reg{
    background-color: #383C41;
    color: #F5F4F0;
    height: 700px;
  }

  #regBtn{
    background-color: #C89D83;
    left: -448px;
  }

  #regCaption{
    padding-top: 300px;
    text-align: left;
    margin-left: 300px;
  }
</style>