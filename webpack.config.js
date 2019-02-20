'use strict'

const { VueLoaderPlugin } = require('vue-loader')
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const packageName = 'app';

module.exports = {
  mode: "development",
  entry: "./src/"+packageName+".js",
  output: {
    path: path.resolve(__dirname + "/dist"),
    filename: packageName+".js",
    publicPath: "/dist"
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      { 
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ],
      }]
  },
  optimization: {
    minimizer: [
      new TerserPlugin(),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: packageName+".css",
      chunkFilename: "[id].css"
    }),
    new VueLoaderPlugin()
  ],
  externals: {
    "jquery": "jQuery"
  }
};