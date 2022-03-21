<template>
  <div>
    <v-text-field id="input" color="#C89D83" v-model="theName" label="Enter Your Name" required />
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
    color: #C89D83;
  }
</style>