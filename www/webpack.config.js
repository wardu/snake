const path = require("path");
const webpackCopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "public"),
  },
  mode: "development",
  plugins: [
    new webpackCopyPlugin({
      patterns: [{ from: "./index.html", to: "./" }],
    }),
  ],
};
