<template>
  <div>
    <v-text-field v-on:keyup="$emit('updateName', theName)" id="input" light v-model="theName" label="Enter Your Name" required />
  </div>
</template>

<script>
export default {
  name: "Name",
  data() {
    return {
      theName:""
    };
  },
};
</script>

<style scoped>
  #input{
    width: 500px;
  }
</style>