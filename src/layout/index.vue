<template>
  <el-container>
    <v-pageHeader></v-pageHeader>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
import pageHeader from "./PageHeader";

export default {
  name: "layout",
  components: { "v-pageHeader": pageHeader }
};
</script>

<style scoped>
.el-header {
  background-color: #b3c0d1;
  height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  height: 100%;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  height: 100%;
}
</style>
