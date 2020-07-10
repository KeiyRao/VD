<template>
  <el-row>
    <el-col>logo</el-col>
    <el-col>
      <el-avatar shape="square" :size="100" fit="fit" :src="url"></el-avatar>
      <span>张三</span>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "pageHeader",
  data() {
    return {
      fits: ["fill", "contain", "cover", "none", "scale-down"],
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
    };
  }
};
</script>