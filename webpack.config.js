const prod = process.env.NODE_ENV === "production";
const webpack = require("webpack");

module.exports = {
  entry: {
    app: "./src/index.js",
    vendor: ["babel-polyfill", "react", "react-dom", "react-router", "redux", "redux-thunk", "react-redux", "axios"]
  },
  output: {
    path: __dirname + "/public",
    publicPath: '/',
    filename: 'bundle.js'
  },
  devtool: prod ? null : "inline-sourcemap",
  plugins: prod ? [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js"),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })] :
  [
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js")
  ],
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loader: "style!css!sass"
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
