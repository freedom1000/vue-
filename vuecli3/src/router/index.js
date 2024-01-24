import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Mine from '../views/MineView.vue';
import Test1 from '../views/Test1View.vue';
import Test2 from '../views/Test2View.vue';

Vue.use(VueRouter);
// vue-router构建单页面应用 路径之间的切换，也就是组件之间的切换
const routes = [
  {
    path: '/', // 页面路径
    name: 'home',
    component: HomeView, // 匹配的组件
  },
  {
    path: '/about', // 页面路径和名字通常一样
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/mine',
    name: 'mine',
    component: Mine,
    children: [ // 插入子路由时在组件下面通过children来引入
      {
        path: 'test1',
        name: 'test1',
        component: Test1,
      },
      {
        path: 'test2',
        component: Test2,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history', // 有hash和history两种模式
  base: process.env.BASE_URL, // 基础路径，如果上线是必须要配置的路径，在vue.config里面配置
  routes,
});

export default router;
