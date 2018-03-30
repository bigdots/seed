
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <el-button type="primary" icon="el-icon-edit"></el-button>
  </div>
</template>


<script>

export default {
    name: "HelloWorld",
    data() {
        return {
            msg: "Welcome to Your Vue.js App"
        };
    },
};
</script>

<style scoped>
h1 {
    height: 4rem;
}
</style>
