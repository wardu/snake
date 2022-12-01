const path = require("path");
const webpackCopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./index.ts",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "public"),
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new webpackCopyPlugin({
      patterns: [{ from: "./index.html", to: "./" }],
    }),
  ],
};
