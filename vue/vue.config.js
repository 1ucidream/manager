const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8080
  },
  chainWebpack: config =>{
    config.plugin('html')
        .tap(args => {
          args[0].title = "勿理物理实验教学中心";  // 可以换成其他名字
          return args;
        })
  }
})
