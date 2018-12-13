https://www.imooc.com/article/257747

cnpm install -g @vue/cli

cnpm install -g pm2

cnpm install -g @vue/cli-service-global

source ~/.bash_profile

npm install -g cnpm --registry=https://registry.npm.taobao.org

<template>
  <h1>Welcome to {{website}}!</h1>
</template>

<script>
  export default {
    data() {
      return {
        website: 'imooc.com'
      }
    }
  }
</script>

<style scoped>
  h1 {
    background: gray;
    color: white;
  }
</style>

curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
