import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: { // 储存的东西都放在这里
    count: 0,
  },
  getters: {// 计算过滤操作
    count() {
      state.count += 100;
    },
  },
  mutations: { // 可以在这里改变state count的值 也可以进行传值
    add(state,number) {
      state.count+=number;
    },
  },
  actions: {// 异步修改状态
  },
  modules: {
  },
});
