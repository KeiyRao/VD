const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const AutoDllPlugin = require("autodll-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
console.log(HtmlWebpackPlugin);

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, "../src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].[hash].js",
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js",
      "@": path.resolve(__dirname, "../src"),
    },
    extensions: ["*", ".js", ".json", ".vue"],
  },
  module: {
    rules: [
      { test: /\.js$/, use: "babel-loader", exclude: /node_modules/ },
      { test: /\.(png|svg|jpg|gif|woff|woff2|eot|otf)$/, use: ["file-loader"] },
      { test: /\.vue$/, loader: "vue-loader" },
      {
        test: /\.css$/,
        use: [
          // "vue-style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      hash: true,
      title: "VD",
      template: path.resolve(__dirname, "../index.html"),
    }),
    new VueLoaderPlugin(),
    new AutoDllPlugin({
      inject: true,
      debug: true,
      filename: "[name]_[hash].js",
      path: "/dll",
      context: path.resolve(__dirname, "./"),
      entry: {
        vendor: ["vue", "vue-router", "vuex"],
      },
    }),
    new webpack.optimize.SplitChunksPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
};
