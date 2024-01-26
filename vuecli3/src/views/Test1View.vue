<template>
   <div>
      <h1>子路由1</h1>
      <!-- 将app.vue中子路由1的name和age值通过name传参的方式传到test1页面 -->
      <h1>姓名是： {{ $route.params.name }}</h1>
      <h1>年龄是： {{ $route.params.age }}</h1>
      <h1>movieId: {{ $route.params.movieId }}</h1>
   </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      detail: {},
    };
  },
  created() {
    console.log(this.$route.params.movieId);
    axios.get('https://www.fastmock.site/mock/c56d05dcea9868c4b8b3132d0d0e78ca/base/movie/list').then((res) => {
      console.log(res);
    });
  },
};
</script>
<style lang='' scoped>
</style>
