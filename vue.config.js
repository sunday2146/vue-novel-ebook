/*
function mock(app, url, data) {
  app.get(url, (request, response) => {
    response.json(data)
  })
}

const homeData = require('./src/mock/bookHome')
const shelfData = require('./src/mock/bookShelf')
const listData = require('./src/mock/bookList')
const flatListData = require('./src/mock/bookFlatList')
const userInfoData = require('./src/mock/userInfo')
*/

module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? './' : '/',

  devServer: {
    /*
    before(app) {
      mock(app, '/book/home', homeData)
      mock(app, '/book/shelf', shelfData)
      mock(app, '/book/list', listData)
      mock(app, '/book/flat-list', flatListData)
      mock(app, '/user/info', userInfoData)
    }
    */
  },

  configureWebpack: {
    performance: {
      hints: 'warning',
      maxAssetSize: 524228 * 10,
      maxEntrypointSize: 524288 * 10
    }
  },

  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },

  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  }
}
