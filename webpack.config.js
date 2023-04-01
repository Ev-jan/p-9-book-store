const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  optimization: {},
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.png$/,
        use: [
          {
            loader: "url-loader",
            options: {
              mimetype: "image/png",
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          // 'style-loader',
          {
            loader: "@teamsupercell/typings-for-css-modules-loader",
            options: { formatter: "prettier" }
          },
          {
            loader: "css-loader",
            options: { modules: true }
          },
          "sass-loader",
        ],
      },
      {
        test: /\.svg$/,
        use: "file-loader",
      },
      {
        test: /\.ts(x)?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "src"),
    },
    compress: true,
    port: 9000,
  },
  // watch: true,
};

module.exports = config;
