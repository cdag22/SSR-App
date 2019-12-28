const Merge = require("webpack-merge");

const server = require("./webpack.server.js");

module.exports = Merge(server, {
  mode: "development",
  devtool: "inline-source-map"
});
