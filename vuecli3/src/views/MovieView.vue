<template>
    <ul>
        <li v-for="movie" in movieList :key="movie.id">
            <router-link :to="'/movieDetail/'+movie.id">
                <!-- 跳转到电影详情页面 -->
                {{ movie.name }}
            </router-link>
        </li>
    </ul>
</template>
<script>
export default {
  data() {
    return {
      movieList: [
        {
          id: 1,
          name: '电影1',
        },
        {
          id: 2,
          name: '电影2',
        },
        {
          id: 3,
          name: '电影3',
        },
      ],
    };
  },
};
</script>
<style lang='scss' scoped></style>
