var path = require("path");
var webpack = require("webpack");

module.exports = function (env) {
  var pack = require("./package.json");

  var babelSettings = {
    extends: path.join(__dirname, "/.babelrc"),
  };

  var config = {
    mode: "development",
    entry: {
      app: "./sources/app.js",
    },
    output: {
      path: path.join(__dirname, "codebase"),
      publicPath: "/codebase/",
      filename: "[name].js",
      chunkFilename: "[name].bundle.js",
    },
    devtool: "inline-source-map",
    module: {
      rules: [
        {
          test: /\.js$/,
          use: "babel-loader?" + JSON.stringify(babelSettings),
        },
      ],
    },
    resolve: {
      extensions: [".js"],
      modules: ["./sources", "node_modules"],
      alias: {
        "jet-views": path.resolve(__dirname, "sources/views"),
        "jet-locales": path.resolve(__dirname, "sources/locales"),
      },
    },
    devServer: {
      client: {
        logging: "error",
      },
      static: __dirname,
      historyApiFallback: true,
    },
  };

  return config;
};
