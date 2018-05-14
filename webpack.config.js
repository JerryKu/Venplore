
const path = require('path');

const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: [`${SRC_DIR}/index.jsx`, `${DIST_DIR}/style.scss`],
  output: {
    filename: "bundle.js",
    path: DIST_DIR
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015"]
        }
      },
      {
        test: /\.scss$/,
        include: DIST_DIR,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
};
