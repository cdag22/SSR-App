const path = require("path");
const Merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

// const moduleList = ["prop-types", "react", "react-dom", "react-router-dom"];

const commonWebpack = require("./webpack.common.js");

const clientWebpack = {
  entry: {
    client: path.join(__dirname, "src", "client", "Index.jsx")
  },
  output: {
    path: path.join(__dirname, "public"),
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js",
    publicPath: "/"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.ejs"
    })
  ],
  // optimization: {
  //   minimize: true,
  //   minimizer: [new TerserPlugin()],
  //   runtimeChunk: "single",
  //   splitChunks: {
  //     cacheGroups: {
  //       vendor: {
  //         test: new RegExp(
  //           `[\\/]node_modules[\\/](${moduleList.join("|")})[\\/]`
  //         ),
  //         chunks: "initial",
  //         name: "vendors",
  //         enforce: true
  //       }
  //     }
  //   }
  // },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          // cacheGroupKey here is `commons` as the key of the cacheGroup
          name(module, chunks, cacheGroupKey) {
            const moduleFileName = module
              .identifier()
              .split("/")
              .reduceRight(item => item);
            const allChunksNames = chunks.map(item => item.name).join("~");
            return `${cacheGroupKey}-${allChunksNames}-${moduleFileName}`;
          },
          chunks: "all"
        }
      }
    }
  }
};

module.exports = Merge(commonWebpack, clientWebpack);
