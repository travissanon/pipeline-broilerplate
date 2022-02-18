const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: "./src/client/index.ts",
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
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [new Dotenv()],
  node: {
    global: false,
    __filename: false,
    __dirname: false,
  },
};
