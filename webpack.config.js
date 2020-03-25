const path = require("path");
//用于插入html模板
const HtmlWebpackPlugin = require('html-webpack-plugin');
//清除输出目录，免得每次手动删除
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const webpack = require("webpack");

module.exports = {
  entry: "./index.jsx",
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.[chunkhash].js'
  },
  devtool:'cheap-module-source-map',
  module: {
    rules: [{
      test: /\.js|\.jsx$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', {
              useBuiltIns: 'usage'
            }],
            '@babel/preset-react'
          ],
          plugins: ['@babel/transform-runtime','@babel/plugin-proposal-class-properties']
        }
      }
    }]
  },
  optimization:{
    splitChunks:{
      chunks:'all'
    }
  },
  mode: 'development',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
    }),
    // 
    new BundleAnalyzerPlugin()
    // //持久化moduleId，主要是为了之后研究加载代码好看一点。
    // new webpack.HashedModuleIdsPlugin(),
  ]
}