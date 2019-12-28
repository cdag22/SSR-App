const Merge = require("webpack-merge");

const client = require("./webpack.client.js");

module.exports = Merge(client, {
  mode: "development",
  devtool: "inline-source-map"
});
