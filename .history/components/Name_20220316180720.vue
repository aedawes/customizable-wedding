<template>
  <div>
    <v-text-field class="input" style="color: #C89D83 !important;" v-model="theName" label="Enter Your Name" required />
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
  .input{
    color: #C89D83 !important;
  }
</style>