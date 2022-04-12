<template>
    <div class="main">
        <div class="behind"></div>
        <v-row justify="center" align="center">
            <v-col cols="12" sm="8" md="6">
                <v-card elevation="5" class="card" id="content">
                    <v-card-title justify="center" class="justify-center">
                        <h1> Edit Site Details </h1>
                    </v-card-title>
                    <v-card-text justify="center">
                        <label for="name"> Couple Name </label>
                        <v-text-field id="name" class="input" v-model="form.coupleName" label="[name] and [name]" required />
                        <label for="address1"> Ceremony Address </label>
                        <v-text-field id="address1" class="input" v-model="form.addressOne" label="123 Peach St" required />
                        <label for="address2"> Reception Address </label>
                        <v-text-field id="address2" class="input" v-model="form.addressTwo" label="321 Apple Rd" required />
                        <label for="reg" > Add Registry Link </label>
                        <v-text-field id="reg" class="input" v-model="form.addRegistryLink" label="www.registry.com" required />
                        <div class="centerbtn">
                          <v-btn class="button" @click="updateForm()">Update Site</v-btn>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
  name: 'UpdateFormPage',
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
  methods:{
    async updateForm(){
      const success = await this.$store
            .dispatch("forms/updateForm", {
            coupleName: this.form.coupleName,
            addressOne: this.form.addressOne,
            addressTwo: this.form.addressTwo,
            addRegistryLink: this.form.addRegistryLink
        });
        let theUsername = this.user.substring(1, (this.user.length - 1))
        this.$router.push(`/home/${ theUsername }`)
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
        margin-bottom: 150px;
    }
</style>