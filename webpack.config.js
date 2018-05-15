const path = require("path");
const loadersConf = require("./webpack.loaders");

module.exports = {
  entry: [
    "core-js/fn/promise",
    "core-js/es6/object",
    "core-js/es6/array",
    "./src/index.js"
  ],
  module: {
    rules: loadersConf
  },
  resolve: {
    extensions: [".js", ".jsx"],
    modules: [
      path.join(__dirname, "src"),
      path.join(__dirname, "node_modules")
    ],
    alias: {
      styles: path.resolve(__dirname, "src/styles/"),
      utility: path.resolve(__dirname, "src/utility/"),
      components: path.resolve(__dirname, "src/components/")
    }
  },
  externals: ["react", "react-dom"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "alkali-ui.js",
    library: "alkali-ui",
    libraryTarget: "commonjs2"
  }
};
