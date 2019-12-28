const Merge = require("webpack-merge");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const client = require("./webpack.client.js");

module.exports = Merge(client, {
  mode: "production",
  plugins: [new BundleAnalyzerPlugin()]
});
