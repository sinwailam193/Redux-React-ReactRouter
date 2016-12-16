const debug = process.env.NODE_ENV === "production";
const webpack = require("webpack");

module.exports = {
  entry: debug ? ["./src/index.js",] : {
    app: "./src/index.js",
    vendor: ["babel-polyfill", "react", "react-dom", "react-router", "redux", "redux-thunk", "react-redux", "axios"]
  },
  output: {
    path: __dirname + "/public",
    publicPath: '/',
    filename: 'bundle.js'
  },
  devtool: debug ? "inline-sourcemap" : null,
  plugins: debug ? [] : [
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js"),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
  ],
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
