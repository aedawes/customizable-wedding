<template>
  <v-app light class="mainbody">
    <v-main id="mainDiv">
      <v-container id="contain">
        <v-app-bar
      :clipped-left="clipped"
      mainPink
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
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list id="list">
        <v-list-item v-if="users !== null" @click.native="account()">
          <v-list-item-action>
          </v-list-item-action>
          <v-list-item-title>Account</v-list-item-title>
        </v-list-item>
        <v-list-item v-if="users !== null" @click.native="logout()">
          <v-list-item-action>
          </v-list-item-action>
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
        <v-list-item v-if="users === null" @click.native="login()">
          <v-list-item-action>
          </v-list-item-action>
          <v-list-item-title>Login</v-list-item-title>
        </v-list-item>
        <v-list-item v-if="users === null" @click.native="createAccount()">
          <v-list-item-action>
          </v-list-item-action>
          <v-list-item-title>Create an Account</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :absolute="!fixed"
      app
      class="footer"
    >
      <span> 
        <a class="footerLink" target="_blank" href="https://github.com/aedawes/customizable-wedding.git"> Link to Github </a>
      </span>
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
      this.$router.push('/')
    },
    login () {
      this.$router.push('/login')
    },
    createAccount () {
      this.$router.push('/createAccount')
    },
    account(){
      this.$router.push('/account')
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
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400&family=Quicksand:wght@300;400&display=swap');

  .navbar {
    background-color: rgba(0, 0, 0, 0.5) !important;
    color: #F5F4F0 !important;
    font-family: 'Montserrat', sans-serif !important;
    top: 76px;
  }

  .mainbody{
    font-family: 'Montserrat', sans-serif !important;
    background-color: #F5F4F0 !important;
    backdrop-filter: blur(2px) !important;
    color: #C89D83;
    top: -76px;
    margin: 0px;
    padding: 0px;
  }

  .footer{
    background-color: #C89D83 !important;
  }

  .footerLink {
    color: #F5F4F0;
    text-decoration: none;
  }

.container {
    width: 1800px;
    padding: 0px;
    margin: 0px;
}

#list{
  margin-top: 100px;
}
</style>