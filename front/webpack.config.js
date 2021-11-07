const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  mode: 'development',
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: '../',
    assetModuleFilename: "images/[name][ext][query]",
    clean: true,
  },
  devServer: {
    static: path.resolve(__dirname, 'app'),
    hot: true,
    compress: true,
    port: 3001,
    host: '127.0.0.1',
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: "./index.html"
    }),
    new HtmlWebpackPlugin({
      template: './src/analytics.html',
      filename: "./analytics.html"
    }),
    new HtmlWebpackPlugin({
      template: './src/dashboard.html',
      filename: "./dashboard.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
  ],
  module: {
    rules: [
        { test: /\.css$/i, use: ["style-loader", "css-loader"] },
        // { test: /\.scss$/i, use: ["style-loader", "css-loader", "sass-loader"] },
        { test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/, type: 'asset/resource' },
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin()
    ]
  }
}