<template>
   <div>
     <h1>music</h1>
   </div>
</template>
<script>
export default {
  created() {
    this.$emit('switchTab', 'music');
  },
};
</script>
<style lang='scss' scoped>
</style>
