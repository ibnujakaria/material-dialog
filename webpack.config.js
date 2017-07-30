var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CleanWebPackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: {
    snackbar: './src/material-dialog.js',
    index: './src/index.js'
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    //new CleanWebPackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Material dialog in Action',
      template: 'index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', 'css-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
}
