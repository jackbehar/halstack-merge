const path = require("path");
const webpack = require("webpack");

const config = {
  entry: ["./src/index.tsx"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        loader: "svg-react-loader",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    static: {
      directory: "./dist",
    },
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
  ],
};

module.exports = config;
