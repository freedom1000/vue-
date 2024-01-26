<template>
  <div>
    <button @click="$store.commit('add',2)">按钮</button>
    <!-- 在这里调用store里面mutations的变化值 -->
    <h1>{{ count }}</h1>
  </div>
</template>
<script>
import store from '@/store/index'; // 在这里引用store.js的count值  @表示src路径

export default {
  store, //
  data() {
    return {

    };
  },
  computed: {
    count() {
      return this.$store.state.count;// 将这$store.state.count写在计算属性里，在h1中就可以简化内容
    },
  },
};
</script>
<style lang='' scoped>
</style>
