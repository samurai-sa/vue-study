const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '', // build 後の dist ファイルで表示するため
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/sass/variables.scss";`
      }
    }
  }
})
