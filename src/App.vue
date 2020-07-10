<template>
  <v-layout></v-layout>
</template>

<script>
import Layout from "./layout";

export default {
  name: "App",

  components: { "v-layout": Layout },
  data() {
    console.log(this);
    return {
      text: "hello VUE world3"
    };
  }
};
</script>

<style>
</style>