// container/config/webpack.dev.js
const { merge } = require("webpack-merge");
const { resolve } = require("path");
const commonConfig = require("./webpack.common");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("../package.json");

const devConfig = {
  mode: "development",
  output: {
    path: resolve(__dirname, "public"),
    publicPath: "http://localhost:8080/",
  },
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: "/index.html",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        helloWorld: "helloWorld@http://localhost:8081/remoteEntry.js",
        dashboard: "dashboard@http://localhost:8082/remoteEntry.js",
      },
      shared: [
        packageJson.devDependencies["style-loader"],
        packageJson.devDependencies["css-loader"],
      ],
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
