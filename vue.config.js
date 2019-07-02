module.exports = {
  //publicPath: process.env.NODE_ENV === 'production' ? '/hppbgr/' : '/',

  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/sass/main.sass";`
      }
    }
  },
}
