const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  configureWebpack: {
    plugins: [new CopyPlugin([{ from: "./CNAME", to: "./" }])]
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/css/master.scss";`
      },
    }
  }
};
