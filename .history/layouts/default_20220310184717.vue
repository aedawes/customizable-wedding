<template>
  <v-app light class="mainbody">
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      class="navbar"
    >
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item v-if="users !== null" @click.native="logout()">
          <v-list-item-action>
          </v-list-item-action>
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Customizable Wedding'
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('accounts/logout')
    }
  },
  computed:{
    users(){
      return this.$store.state.accounts.user
    }
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;800&family=Quicksand:wght@300;400&display=swap');

  .navbar {
    background-color: rgba(0, 0, 0, 0.5) !important;
    font-family: 'Montserrat', sans-serif !important;
  }

  .mainbody{
    font-family: 'Montserrat', sans-serif !important;
    background-color: #F5F4F0 !important;
    backdrop-filter: blur(2px) !important;
    color: #C89D83;
  }
</style>