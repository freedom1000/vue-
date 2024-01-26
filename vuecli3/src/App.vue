<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/mine">mine</router-link> | <!-- router-link相当于一个a标签，to后面的地址指的是router。
        js里面path的地址 -->
      <router-link :to="{name:'test1',params: {name:'xiecheng',age:18,movieId:123} }">子路由1
      </router-link> |
      <!-- name传参 -->
      <router-link to="/mine/test2">子路由2</router-link> |
      <router-link to="/testUrl/5/zhangsan">URL传参</router-link> |
      <!-- 通过URL传参 -->
      <router-link to="/xx">重定向</router-link> |
      <!-- 重定向 将主页的内容重新放在另一个页面上即为重定向 -->
      <router-link to="/minealias">别名</router-link> |
      <router-link to="movie">电影列表</router-link> |
      <router-link to="count">vuex</router-link>
    </nav>
    <!--
      过渡动画效果：结构
      <transition name="fade">
      <router-view/>
    </transition>
     -->
    <transition name="fade">
      <router-view/><!-- 根据当前页面所在的路径加载views目录下的页面，它们的匹配关系在router目录下 -->
    </transition>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
// 过渡动画效果：
.fade-enter{// 刚进去时候的效果 定义进入过渡的开始状态
  opacity: 0;
}
.fade-enter-active{// 定义进入过渡生效时的状态
  transition: opacity 2s ease;
}
.fade-enter-to{// 定义进入过渡的结束状态
  opacity: 1;
}
.fade-leave{// 离开时候的效果 定义离开过渡的开始状态
transform: translateX(0);
}
.fade-leave-active{// 定义离开过渡生效时的状态
  transition: transform 1s ease;
}
.fade-leave-to{// 定义离开过渡的结束状态
transform: translateX(100%);
}
</style>
