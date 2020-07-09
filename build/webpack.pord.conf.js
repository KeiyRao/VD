const merge = require("webpack-merge");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const proMer = require("webpack-merge");
const baseConfig = require("./webpack.base.conf");

module.exports = proMer.merge(baseConfig, {
  mode: "production",
  devtool: "source-map",
  module: {
    rules: [],
  },
  plugins: [new CleanWebpackPlugin()],
});
