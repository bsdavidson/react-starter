// Karma configuration
var webpack = require("webpack");

module.exports = function(config) {
  config.set({
    basePath: "",
    frameworks: ["mocha"],
    files: ["test/index.js"],
    exclude: [],
    preprocessors: {
      "test/index.js": ["webpack", "sourcemap"]
    },
    reporters: ["mocha", "notify"],
    mochaReporter: {
      showDiff: true
    },
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["Chrome"],
    webpack: {
      devtool: "inline-source-map",
      externals: {
        "react/addons": true,
        "react/lib/ExecutionEnvironment": true,
        "react/lib/ReactContext": true
      },
      module: {
        loaders: [
          {
            test: /\.json$/,
            loader: "json"
          },
          {
            test: /\.jsx?$/,
            loader: "babel-loader",
            exclude: /node_modules/,
            query: {
              presets: ["es2015", "react"]
            }
          }
        ]
      },
      resolve: {
        extensions: ["", ".js", ".jsx", ".json"]
      },
      watch: true
    },
    webpackServer: {
      noInfo: true
    },
    singleRun: false,
    concurrency: Infinity
  });
};
