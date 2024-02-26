const { environment } = require("@rails/webpacker");

// Add a new loader
environment.loaders.prepend("custom-loader", {
  test: /\.custom_extension$/,
  use: "custom-loader",
});

// Add a new plugin
const MyPlugin = require("my-webpack-plugin");
environment.plugins.prepend("MyPlugin", new MyPlugin());

// Customize other settings
environment.splitChunks((config) => {
  config.cacheGroups.myCustomGroup = {
    test: /some-module/,
    name: "my-custom-group",
    chunks: "all",
  };
});

module.exports = environment;
