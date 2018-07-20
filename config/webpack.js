const HtmlWebPackPlugin = require("html-webpack-plugin")


module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'src/index.html'
    })
  ],
  devServer: {
    port: '8080',
    watchContentBase: true,
    open: 'google-chrome-stable',
  }
}
