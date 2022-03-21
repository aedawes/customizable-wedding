<template>
  <div>
    <v-text-field id="input" light v-model="theName" label="Enter Your Name" required />
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