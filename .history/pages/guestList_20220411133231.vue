<template>
  <div class="main">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6" id="colmn">
        <v-card elevation="5" class="card">
            <v-card-text justify="center">
              <h1> Manage Guests </h1>
                <!-- <v-text-field class="input" v-model="form.guestName" label="name" required />
                <v-text-field class="input" v-model="form.guestEmail" label="email" required />
                <v-btn class="button" @click="addGuest()">Add Guest</v-btn> -->
            </v-card-text>
            <v-data-table
                  striped
                  :headers="headers"
                  :items="guestList"
                  :page.sync="page"
                  hide-default-footer
                  class="elevation-5"
                  id="table"
                >
              <template v-slot:item.actions="{ item }">
                <v-btn icon @click="deleteGuest(item)">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
                <!-- <v-btn>
                  <v-icon small @click="deleteGuest(item)"> mdi-delete </v-icon>
                </v-btn> -->
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
    // Data () {
    async asyncData ({ params, store }) {
    await store.dispatch('guests/getGuests', params.index)
    return {
        page: 1,

        //table
        headers: [
          {
            text: "Guests",
            align: "start",
            sortable: true,
            value: "guestname",
          },
          { text: "Emails", value: "guestemail" },
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
        deleteGuest(item) {
        this.$store.dispatch('guests/deleteGuest', item.guestemail)
        .catch(() => {
            alert("Delete Failed")
            console.error("Delete Failed")
        })
      },
    },
    computed: {
        user () {
          return this.$store.state.accounts.user
        },
        guestList(){
            return this.$store.state.guests.content
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

  .card h1{
    margin: 10px;
  }

  .table-header thead {
    background-color: aqua;
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