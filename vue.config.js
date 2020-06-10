module.exports = {
    publicPath: '',
    devServer: {
        host: '0.0.0.0',
        port: 8081, // CHANGE YOUR PORT HERE!
        proxy: {
            '^/Plone': {
              target: 'http://localhost:8080',
              ws: true,
              changeOrigin: true,
              //pathRewrite: {'^/api': '/Plone'},
            }
        }
      }
}