<template>
  <div class="m-tabbar">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'm-tabbar',
    props: ['value']
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../assets/styles/global";

  .m-tabbar {
    flex: 1;
    flex-direction: row;
    position: relative;
    width: 25%;
    height: px2rem(50);
    overflow: hidden;
    background: #fff;
    border-top: px2rem(1) solid #e4e4e4;
    box-sizing: border-box;
    @include center;
  }
</style>
