const devMer = require("webpack-merge");
const path = require("path");
const webpack = require("webpack");
const baseConfig = require("./webpack.base.conf");

module.exports = devMer.merge(baseConfig, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "../dist"),
    open: true,
    hot: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
