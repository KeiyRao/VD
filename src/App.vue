<template>
  <div id="test">{{text}}</div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      text: "hello VUE world3"
    };
  }
};
</script>

<style>
#test {
  color: #f40;
  font-size: 16px;
}
</style>