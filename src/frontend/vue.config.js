module.exports = {
  devServer: {
    disableHostCheck: true,
    proxy: {
      '^/api': {
        target: 'http://iris:52773/',
        changeOrigin: true
      },
    }
  }
}
