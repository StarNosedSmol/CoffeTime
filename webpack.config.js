const path = require('path');
const HtmLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './client/src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    port: 8080,
    proxy: {
      '/': 'http://localhost:3000',
    },
  },
  plugins: [
    new HtmLWebpackPlugin({
      template: path.join(__dirname, './client/public/index.html'),
    }),
  ],
};
