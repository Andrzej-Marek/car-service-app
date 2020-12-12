const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common(), {
  mode: "development",
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        BACKEND_URL: JSON.stringify("http://localhost:1337"),
        ENV: JSON.stringify("DEVELOPMENT"),
        CLIENT_URL: JSON.stringify("https://raportserwisowy.pl"),
      },
    }),
  ],
});
