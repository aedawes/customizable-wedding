<template>
  <div class="main">
    <h1 class="Welcome">Welcome<span v-if="theName.length > 0">,</span> {{ theName }}</h1>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6" id="colmn">
        <h2 class="subIntro">create a website tailored to your wedding</h2>
        <Name @updateName="theName=$event"></Name>
        <v-btn class="buttons" @click="createAccount()">Create an Account</v-btn>
        <v-btn class="buttons" @click="login()">Log In</v-btn>
      </v-col>
    </v-row>

  </div>
  <!-- <v-data-table
                  striped
                  :headers="headers"
                  :items="items"
                  :page.sync="page"
                  hide-default-footer
                  class="elevation-1"
                >
                  <template v-slot:item.actions="{ item }">
                    <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
                    <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
                  </template>
                </v-data-table> -->
</template>

<script>
// data () {
//       return {
//         page: 1,

//         //table
//         headers: [
//           {
//             text: "Guests",
//             align: "start",
//             sortable: true,
//             value: "guestName",
//           },
//           { text: "Emails", value: "guestEmail" },
//           { text: "Actions", value: "actions", sortable: false },
//         ],
//         items: [],  //rows to be populated with

//         //addGuestForm
//         form: {
//             guestName:'',
//             guestEmail: ''
//         }
//       }
//     },
export default {
  name: 'IndexPage',
  data () {
    return {
      theName: '',
      text: ''
    }
  },
  methods: {
    login () {
      this.$router.push('/login')
    },
    createAccount () {
      this.$router.push('/createAccount')
    }
  },
}
</script>

<style scoped>
  .main{
    text-align: center !important;
    margin-top: 90px !important;
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

