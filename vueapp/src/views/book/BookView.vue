<template>
   <div>
     <h1>book</h1>
   </div>
</template>
<script>
export default {
  created() {
    this.$emit('switchTab', 'book');
  },
};
</script>
<style lang='scss' scoped>
</style>
