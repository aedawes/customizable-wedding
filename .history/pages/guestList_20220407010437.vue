<template>
  <div class="main">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6" id="colmn">
        <v-card elevation="5" class="card">
            <v-card-text justify="center">
                <v-text-field class="input" v-model="form.guestName" label="name" required />
                <v-text-field class="input" v-model="form.guestEmail" label="email" required />
                <v-btn class="button" @click="addGuest()">Add Guest</v-btn>
                <v-btn class="button" @click="deleteGuest()">Delete Guest</v-btn>
            </v-card-text>
            <v-data-table
                  striped
                  :headers="headers"
                  :items="items"
                  :page.sync="page"
                  hide-default-footer
                  class="elevation-5"
                >
              <template>
                <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
                <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
              </template>
            </v-data-table>
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
        page: 1,

        //table
        headers: [
          {
            text: "Guests",
            align: "start",
            sortable: true,
            value: "guestName",
          },
          { text: "Emails", value: "guestEmail" },
          { text: "Actions", value: "actions", sortable: false },
        ],
        items: [],  //rows to be populated with

        //addGuestForm
        form: {
            guestName:'',
            guestEmail: ''
        }
      }
    },
    methods: {
        async addGuest(){
            const success = await this.$store
                .dispatch(`guests/addGuest`, {
                guestName: this.form.guestName,
                guestEmail: this.form.guestEmail
            });
            if (success === 'success'){
                alert(this.form.guestName + " has been added to the list")
            }
        },
        deleteAccount () {
        this.$store.dispatch('guests/deleteGuest')
        .catch(() => {
            alert("Delete Failed")
            console.error("Delete Failed")
        })
      },
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