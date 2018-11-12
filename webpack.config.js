const
  fs = require('fs'),
  WebpackDashboard = require('webpack-dashboard/plugin'),
  {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer'),
  HtmlWebPackPlugin = require('html-webpack-plugin'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin'),
  {
    env: {
      HTTPS_KEY: httpsKeyPath,
      HTTPS_CRT: httpsCrtPath,
      HTTPS_CA: httpsCaPath
    }
  } = process,
  isHttps = httpsKeyPath && httpsCrtPath && httpsCaPath,
  httpsConfig = isHttps
    ? {
      https: {
        key: fs.readFileSync(httpsKeyPath),
        cert: fs.readFileSync(httpsCrtPath),
        ca: fs.readFileSync(httpsCaPath),
      }
    } : {},
  devServerConfig = Object.assign({}, httpsConfig)

module.exports = {
  devtool: 'source-map',
  devServer: devServerConfig,
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {minimize: true}
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new WebpackDashboard(),
    new BundleAnalyzerPlugin(),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
}
