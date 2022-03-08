<template>
  <div>
    <v-btn @click="load()">Load</v-btn>

    <div>
      <input v-model="text" placeholder="To do item to add">
    </div>

    <v-btn @click="addItem()">Click Me</v-btn>

    <ul>
      <li v-for="item in list" :key="item.text">
        {{item.text}}
      </li>
    </ul>

    <h1>Authentication</h1>
    <v-btn @click="login()">Log In</v-btn>
    <v-btn @click="logout()">Log Out</v-btn>

    <div v-if="user !== null">
      Logged in as {{user}}
    </div>

  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      text: ''
    }
  },
  methods: {
    addItem () {
      this.$store.commit('todo/add', this.text)
      this.text = ''
    },
    load () {
      this.$store.dispatch('todo/getList')
    },
    login () {
      this.$store.dispatch('accounts/login', {
        username: 'bob5',
        password: 'theAnswer'
      })
    },
    logout () {
      this.$store.dispatch('accounts/logout')
    }
  },
  computed: {
    list () {
      return this.$store.state.todo.list
    },
    user () {
      return this.$store.state.accounts.user
    }
  }
}
</script>