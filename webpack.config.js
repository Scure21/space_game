"use strict";

const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: "./src/index.jsx",

  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/build/",
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  watch: true,
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.jsx$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: [/\.vert$/, /\.frag$/],
        use: "raw-loader"
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      CANVAS_RENDERER: JSON.stringify(true),
      WEBGL_RENDERER: JSON.stringify(true)
    })
  ]
};
