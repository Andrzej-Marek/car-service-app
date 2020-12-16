const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common(), {
  mode: "development",
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        BACKEND_URL: JSON.stringify("https://api.raportserwisowy.pl"),
        ENV: JSON.stringify("DEV"),
        CLIENT_URL: JSON.stringify("https://raportserwisowy.pl"),
      },
    }),
  ],
});
