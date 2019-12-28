const Merge = require("webpack-merge");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const server = require("./webpack.server.js");

module.exports = Merge(server, {
  mode: "production",
  plugins: [new BundleAnalyzerPlugin()]
});
