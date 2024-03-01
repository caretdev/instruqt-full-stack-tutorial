module.exports = {
  devServer: {
    allowedHosts: 'all',
    proxy: {
      '^/api': {
        target: 'http://iris:52773/',
        changeOrigin: true,
      },
    },
  },
};
