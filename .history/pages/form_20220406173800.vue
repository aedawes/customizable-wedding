<template>
    <div class="main">
        <div class="behind"></div>
        <v-row justify="center" align="center">
            <v-col cols="12" sm="8" md="6">
                <v-card elevation="5" class="card">
                    <v-card-title justify="center" class="justify-center">
                        <h1> Enter Site Details </h1>
                    </v-card-title>
                    <v-card-text justify="center">
                        <v-text-field class="input" v-model="form.coupleName" label="[name] and [name]" required />
                        <v-text-field class="input" v-model="form.addressOne" label="123 Peach St" required />
                        <v-text-field class="input" v-model="form.addressTwo" label="321 Apple Rd" required />
                        <v-text-field class="input" v-model="form.addRegistryLink" label="www.registry.com" required />
                        <div class="centerbtn">
                          <v-btn class="button" >Create Site</v-btn>
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
      form: {
          coupleName: '',
          addressOne: '',
          addressTwo: '',
          addRegistryLink: ''
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

</style>