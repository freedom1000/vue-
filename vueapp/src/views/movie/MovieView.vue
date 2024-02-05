<template>
   <ul>
    <li class="movie" v-for="(movie) in movieList" :key="movie.id">
      <div class="movie-img"></div>
      <img :src="movie.images.large" alt="">
      <div class="movie-info">
        <div class="movie-info-title">{{ movie.title }}</div>
        <div>观众评分：<span  class="movie-info-averge">{{ movie.rating.averge }}</span></div>
        <div class="movie-info-star">主演：
          <span v-for="item in movie.casts" :key="item.id">{{ item.name }}&nbsp;</span>
        </div>
      </div>
    </li>
   </ul>
</template>
<script>
import axios from 'axios';
export default {
  data(){ //接收返回的电影数据
    return{
      movieList: [

      ]
    }
  },
  beforeCreate(){
    let url = 'GET https://movie.douban.com/j/search_tags' // 这里有个API未找到 电影接口 数据
    axios.get(url).then(res=>{
      console.log(res.data.subjects);
      this.movieList = res.data.subjects;
    });
  },
  created() {
    this.$emit('switchTab', 'movie');
  },
};
</script>
<style lang='scss' scoped>
.move {
  display: flex;
  padding: 0.2rem;
  border-bottom: 0.02rem solid #ccc;
  &-img {
    flex-grow: 1;
    width: 0;
    img {
      width: 100%;
    };
  };
  &-info {
    flex-grow: 3;
    width: 0;
    margin-left: 0.2rem;
    &-title{
      color: #333;
      font-weight: 700;
      font-size: 0.34rem;
    }
    &-averge{
      font-weight: 700;
      color: #faaf00;
    }
    &-star{
      color: #666;
      font-size: 0.26rem;
    }
  };
};
</style>
