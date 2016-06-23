var webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: "source-map",
  entry: {
    "index": "./src/index",
    "css": "./style.scss"
  },
  externals: {
    // "react/addons": true,
    "react/lib/ExecutionEnvironment": true,
    "react/lib/ReactContext": true,
    "assets": true
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["es2015", "react"]
        }
      },
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract("style", "css?sourceMap", "sass?sourceMap")
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("bundle.css")
  ],
  output: {
    path: __dirname,
    filename: "./bundle.js"
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  }
};
