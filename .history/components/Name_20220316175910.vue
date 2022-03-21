<template>
  <div>
    <v-text-field class="input" label="Enter Your Name" required />
  </div>
</template>

<script>
export default {
  name: "WelcomeName",
  data() {
    return {
      name:""
    };
  },
};
</script>
