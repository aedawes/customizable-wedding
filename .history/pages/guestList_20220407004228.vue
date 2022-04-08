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
                <v-data-table
                  hide-action>
                  <template>
                    <tr>
                      <td>Guest Names</td>
                      <td>Emails</td>
                    </tr>
                  </template>
                  <template>
                    <v-card flat>
                      <v-card-title>
                          guestList
                      </v-card-title>
                      <v-card-text>
                        <v-layout row>
                        </v-layout>
                      </v-card-text>
                    </v-card>
                  </template>
                </v-data-table>
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
            form: {
                guestName:'',
                guestEmail: ''
            }
        }
    },
    methods: {
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