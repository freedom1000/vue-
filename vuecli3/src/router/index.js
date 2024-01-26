import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Mine from '../views/MineView.vue';
import Test1 from '../views/Test1View.vue';
import Test2 from '../views/Test2View.vue';
import TestUrl from '../views/TestUrl.vue';
import Error from '../views/ErrorView.vue';
import Movie from '../views/MovieView.vue';
import MovieDetail from '../views/MovieDetail.vue';
import Count from '../views/CountView.vue';

Vue.use(VueRouter);
// vue-router构建单页面应用 路径之间的切换，也就是组件之间的切换
const routes = [
  {
    path: '/', // 页面路径 url的地址
    name: 'home',
    component: HomeView, // 匹配的组件 当前地址指向的组件
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
    alias: '/minealias', // 别名，url地址是别名的地址
    // alias：URL路径没有被改变，这种情况更友好，让用户知道自己访问的路径，只是改变了<router-view>中的内容
    children: [ // children用于父页面进行切换的子路由,插入子路由时在组件下面通过children来引入
      {
        path: 'test1',
        name: 'test1',
        component: Test1,
      },
      {
        path: 'test2',
        name: 'test2',
        component: Test2,
      },
    ],
  }, {
    path: '/testUrl/:username', // 通过URL传参 可以定义数据类型，比如数字：\d表示数字
    name: 'testUrl',
    component: TestUrl,
  }, {
    path: '/xx',
    // redirect:仔细观察URL，redirect是直接改变了url的值，把url变成了真实的path路径
    redirect: '/', // 重定向到主页home上 重定向到不带参数 url的地址是重定向到某个页面的地址
    // redirect: '/testUrl/:userid()/:username', // 重定向到testUrl 重定向到带参数
  }, {
    path: '/*',
    component: Error,
  }, {
    path: '/movie',
    component: Movie,
  }, {
    path: '/movieDetail/:movieId',
    component: MovieDetail,
  }, {
    path: '/count',
    component: Count,
  },
];

const router = new VueRouter({ // 路由钩子函数
  mode: 'history', // 有hash和history两种模式 默认值是hash
  base: process.env.BASE_URL, // 基础路径，如果上线是必须要配置的路径，在vue.config里面配置
  routes,
});

export default router;
