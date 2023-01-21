const path = require('path');
const HtmLWebpackPlugin = require('html-webpack-plugin');   

module.exports = {
    mode: 'development',
    entry: './client/src/index.js',
    output: {
        filename:'main.js',
        path:path.resolve(__dirname, 'dist'),
    },
    // module:{

    // },
    // devServer: {
    //     host: 'localhost',
    //     port:
    //     headers: { 'Access-Control-Allow-Origin': '*' },
    //     proxy:{}
    // },
  plugins: [
    new HtmLWebpackPlugin({
        template: path.join(__dirname, './client/public/index.html')
      })
    ]

}