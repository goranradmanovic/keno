const webpack = require("webpack");

module.exports = {
  //publicPath: process.env.NODE_ENV === 'production' ? '/hppbgr/' : '/',

  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/sass/main.sass";`
      }
    }
  },

  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default']
      })
    ]
  }
}
