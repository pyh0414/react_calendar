const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  devtool: "eval", // hidden-source-map
  resolve: {
    extensions: [".jsx", ".js"]
  },

  entry: {
    app: ["./src/index"]
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      }
    ]
  },

  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  }

  //   plugins: [new webpack.LoaderOptionsPlugin({ debug: true })]
};
