const path = require("path");
//用于插入html模板
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin');
//清除输出目录，免得每次手动删除
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const fs = require('fs');

const entry = {}
const htmlList = []
const files = fs.readdirSync(path.join(__dirname, './src/page'));

files.forEach(function (filename) {
  entry[filename] = path.join(__dirname, './src/page', filename);
  htmlList.push(new HtmlWebpackPlugin({
    template: 'index.html',
    filename: `${filename}/${filename}.html`,
    chunks: ["runtime", "framework", /common(.*)\.js/, filename],
  }))
})

module.exports = {
  entry,
  output: {
    publicPath: '../', // 按需加载指定目录，相对于html
    path: path.resolve(__dirname, './dist'),
    filename: process.env.NODE_ENV === 'production' ? '[name]/[name].bundle.[contenthash].js' : '[name]/[name].bundle.js',
  },
  module: {
    rules: [
      {
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
            plugins: ['@babel/transform-runtime', '@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          }, {
            loader: 'less-loader'
          }],
      },
      {
        test: /\.ejs$/,
        use: [
          {
            loader: "ejs-webpack-loader",
          }
        ]
      }]
  },
  optimization: {
    splitChunks: {
      maxAsyncRequests: 5,
      chunks: "all",
      maxInitialRequests: 3,
      cacheGroups: {
        framework: { // 抽离框架
          test: (module) => {
            return /react|redux|prop-types/.test(module.context);
          },
          name: "framework", // 打包后的文件名，任意命名
          reuseExistingChunk: true,
          priority: 10, // 设置优先级，防止和自定义的公共代码提取时被覆盖，不进行打包
        },
        common: { // 第三方依赖
          test: /node_modules\/(.*)\.js/,
          name: "common",
          priority: 1,
          // maxSize: 3000,
        }
      },
    },
    runtimeChunk: {
      name: 'runtime'
    },
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    ...htmlList,
    new InlineChunkHtmlPlugin(HtmlWebpackPlugin,[/^runtime/]),
    new MiniCssExtractPlugin({
      filename: process.env.NODE_ENV === 'production' ? '[name]/[name].[contenthash].css' : '[name]/[name].css'
    }),
  ].filter(Boolean)
}