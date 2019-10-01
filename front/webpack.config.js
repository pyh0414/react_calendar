const path = require("path");

module.exports = {
  mode: "development", // 실서비스 : production
  devtool: "eval", // 실서비스 : hidden-source-map
  resolve: {
    extensions: [".jsx", ".js"],
    alias: { "react-dom": "@hot-loader/react-dom" }
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
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: [
            "@babel/plugin-proposal-class-properties",
            "react-hot-loader/babel"
          ]
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  },

  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  }
};
