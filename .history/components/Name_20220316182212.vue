<template>
  <div>
    <v-text-field v-on:keypress="$emit('updateName', theName)" id="input" light v-model="theName" label="Enter Your Name" required />
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