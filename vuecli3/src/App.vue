<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/mine">mine</router-link> | <!-- router-link相当于一个a标签，to后面的地址指的是router。
        js里面path的地址 -->
      <router-link to="/mine/test1">子路由1</router-link> |
      <router-link to="/mine/test2">子路由2</router-link>
    </nav>
    <router-view/><!-- 根据当前页面所在的路径加载views目录下的页面，它们的匹配关系在router目录下 -->
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
</style>
