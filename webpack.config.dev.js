const path = require("path");
const webpack = require("webpack");
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')


module.exports = merge(baseConfig, {
  // 热加载
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    hot: true,
    port: 1024,
    open: true,
    // 必须设置，不然无法找到文件
    publicPath: '/'
    // writeToDisk: true,
  },
  devtool: 'cheap-module-source-map',
  mode: 'development',
  plugins: [
    // 热加载
    new webpack.HotModuleReplacementPlugin(),
    // development 模式下开启tree shaking
    new webpack.optimize.ModuleConcatenationPlugin(),
  ].filter(Boolean)
})