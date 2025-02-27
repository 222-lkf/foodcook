// const { defineConfig } = require('@vue/cli-service')

// module.exports = defineConfig({
//   // transpileDependencies: true,
//   lintOnSave: false,
//   configureWebpack: {
//     plugins: [
//       ComponentsPlugin({
//         resolvers: [VantResolver()],
//       }),
//     ],
//   },
// })
const { VantResolver } = require('unplugin-vue-components/resolvers')
const ComponentsPlugin = require('unplugin-vue-components/webpack')
module.exports = {
  lintOnSave: false,
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()],
      }),
    ],
  },
}
