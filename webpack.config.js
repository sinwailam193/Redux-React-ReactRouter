const webpack = require("webpack");

module.exports = {
  entry: {
    app: "./src/index.js",
    vendor: ["babel-polyfill", "react", "react-dom", "react-router", "redux", "redux-thunk", "react-redux", "axios"]
  },
  output: {
    path: __dirname + "/public",
    publicPath: "/",
    filename: "bundle.js"
  },
  plugins: [new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js")],
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
