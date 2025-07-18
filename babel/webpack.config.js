const path = require("path");

module.exports = {
  mode: "production", // [production, development]
  entry: "./src/index.js",
  output: {
    filename: "main.bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
};