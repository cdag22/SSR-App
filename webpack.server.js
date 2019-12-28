const path = require("path");
const Merge = require("webpack-merge");
const NodeExternals = require("webpack-node-externals");

const commonWebpack = require("./webpack.common.js");

const serverWebpack = {
  entry: {
    server: path.join(__dirname, "src", "server", "index.js")
  },
  output: {
    path: path.join(__dirname, "build"),
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js",
    publicPath: "/"
  },
  externals: [NodeExternals()]
};

module.exports = Merge(commonWebpack, serverWebpack);
