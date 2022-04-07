<template>
  <div class="main">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6" id="colmn">
        <v-card elevation="5" class="card">
            <v-card-text justify="center">
                <v-text-field class="input" v-model="username" label="Username" required />
                <v-btn class="button" @click="addGuest()">Add Guest</v-btn>
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
        async createForm(){
            const success = await this.$store
                .dispatch("forms/setForm", {
                coupleName: this.form.coupleName,
                addressOne: this.form.addressOne,
                addressTwo: this.form.addressTwo,
                addRegistryLink: this.form.addRegistryLink
            });
            if (success === 'success'){
                let theUsername = this.user.substring(1, (this.user.length - 1))
                this.$router.push(`/home/${ theUsername }`)
            }
            else{
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