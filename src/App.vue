<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
  import { storeHomeMixin } from './utils/mixin'
  export default {
    mixins: [storeHomeMixin],
    methods: {
    },
    create() {
      //如果url里有openid, 设置进cookie
      var openid = this.$route.query.openid;
      if (typeof openid !== 'undefined') {
        var exp = new Date();
        exp.setTime(exp.getTime() + 3600 * 1000);//过期时间60分钟
        document.cookie = 'openid=' + openid + ";expires=" + exp.toGMTString();
      }
      //获取openid
      if (getCookie('openid') == null) {
        location.href = config.openidUrl + '?returnUrl=' + encodeURIComponent(config.sellUrl + '/#/');
      }
    }
  }
  function getCookie(name) {
    var arr;
    var reg = new RegExp('(^| )' + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) {
      return unescape(arr[2]);
    } else {
      return null;
    }
  }
  document.addEventListener('DOMContentLoaded', () => {
    const html = document.querySelector('html')
    let fontSize = window.innerWidth / 10
    fontSize = fontSize > 50 ? 50 : fontSize
    html.style.fontSize = fontSize + 'px'
  })
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  #app {
    width: 100%;
    height: 100%;
    background: #7d8188;
    overflow: hidden;
  }
</style>
