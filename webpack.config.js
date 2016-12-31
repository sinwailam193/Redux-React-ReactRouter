const prod = process.env.NODE_ENV === "production";
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    app: "./src/index.js",
    vendor: ["babel-polyfill", "react", "react-dom", "react-router", "redux", "redux-thunk", "react-redux", "axios"]
  },
  output: {
    path: path.join(__dirname, "/public"),
    publicPath: "/",
    filename: "bundle.js"
  },
  devtool: prod ? null : "#inline-source-map",
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
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel"
      },
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.jpg$/,
        loader: "file?name=img/[hash].[ext]"
      }
    ]
  }
};
