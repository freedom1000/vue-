<template>
   <div>
     <h1>电影详情页面</h1>
     <h1>电影ID: {{ $route.params.movieId }}</h1>
      <div>{{ datail.name }}</div>
      <div>{{ datail.time }}</div>
      <div>{{ datail.star }}</div>
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
    let movieId = this.$route.params.movieId;
    axios.get('getDetail?movieId' + movieId).then(res => {
      this.detail = res.data.detail;
    });
  },
};
</script>
<style lang='' scoped>
</style>