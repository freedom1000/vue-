<template>
   <div>
     <h1>photo</h1>
   </div>
</template>
<script>
export default {
  created() {
    this.$emit('switchTab', 'photo');
  },
};
</script>
<style lang='scss' scoped>
</style>
