"use strict";

const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: "./src/index.jsx",

  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/build/",
    filename: "project.bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  watch: true,
  module: {
    loaders: [
      {
        test: [/\.vert$/, /\.frag$/],
        use: "raw-loader"
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.jsx$/,
        loader: "babel-loader",
        exclude: /node_modules/
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
