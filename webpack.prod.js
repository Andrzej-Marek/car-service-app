const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common(), {
  mode: "production",
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        BACKEND_URL: JSON.stringify("https://api.raportserwisowy.pl"),
        ENV: JSON.stringify("PROD"),
        CLIENT_URL: JSON.stringify("https://raportserwisowy.pl"),
      },
    }),
  ],
});
