<template>
         <ul class="fotter" :style="{background: bgColor}">
            <li style="{background: menu.bgColor;}" class="footer-menu" v-for="(menu,index)
            in menuList" :key="index"></li>
            <router-link  @click.native="selectMenu(menu)" :to="menu.path">{{ menu.title }}
            </router-link>
            <!-- 脚部标签进行切换 -->
         </ul>
</template>
<script>
export default {
  data() {
    return {
      bgColor: '',
    };
  },
  props: ['menuList'], // 父组件传值到子组件用props
  methods: {
    selectMenu() {
      this.bgColor = menu.bgColor;
      this.$emit('changeTitle', menu); // 子组件给父组件传值用$emit
    },
  },
};
</script>
<style lang='scss' scoped>
.footer {
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #e54874;
  height: 1rem;
  line-height: 1rem;
  &-menu {
    flex-grow: 1;
    text-align: center;
    a {
      color:#ccc;
      outline: none; // 去掉默认
      a.router-link-active { // a标签下面自带的一个class名称，在控制台
         color: #fff; // 点击脚部显示不同的颜色
      };
    };
  };
};
</style>
