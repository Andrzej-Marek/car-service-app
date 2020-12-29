const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const tsImportPluginFactory = require("ts-import-plugin");
const fs = require("fs");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const srcPath = (subDir) => path.join(__dirname, "src", subDir);

module.exports = (_, env) => {
  const isProdMode = env && env.mode === "production";
  const optimizationConfig = {
    minimize: true,
    minimizer: [new TerserPlugin()],
    splitChunks: {
      chunks: "all",
    },
  };

  return {
    mode: isProdMode ? "production" : "development",
    entry: "./src/index.tsx",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].car_service.js",
      publicPath: "/",
    },
    devServer: {
      inline: true,
      historyApiFallback: true,
      contentBase: "./",
      hot: true,
    },
    optimization: isProdMode ? optimizationConfig : {},
    stats: {
      warningsFilter: /export .* was not found in/,
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"],
      alias: {
        "@/components": srcPath("components"),
        "@/containers": srcPath("containers"),
        "@/shared": srcPath("shared"),
        "@/config": srcPath("config"),
      },
    },
    module: {
      rules: [
        {
          test: /\.(jsx|tsx|js|ts)$/,
          loader: "ts-loader",
          options: {
            transpileOnly: true,
            compilerOptions: {
              module: "es2015",
            },
          },
          exclude: /node_modules/,
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.scss$/,
          use: [
            { loader: "style-loader" },
            { loader: "css-modules-typescript-loader" },
            {
              loader: "css-loader",
              options: {
                modules: true,
                localIdentName:
                  env === "production"
                    ? "[hash:base64]"
                    : "[path][name]__[local]--[hash:base64:5]",
              },
            },
          ],
        },
        {
          test: /\.(jpe?g|png|gif|mp3$)$/i,
          use: [
            "file-loader",
            {
              loader: "image-webpack-loader",
              options: {
                disable: true, // webpack@2.x and newer
              },
            },
          ],
        },
        {
          test: /\.svg$/,
          use: ["@svgr/webpack"],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: "./src/static/index.html",
      }),
      new MiniCssExtractPlugin({
        filename: "bundle.css",
      }),
      //   new FaviconsWebpackPlugin("./src/static/favicon.png"),
      // new BundleAnalyzerPlugin(),
      new LodashModuleReplacementPlugin(),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ],
    node: {
      fs: "empty",
    },
  };
};
