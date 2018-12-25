<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
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
