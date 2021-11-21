const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "https://www.zhihu.com",
      },
    },
  },
  configureWebpack: {
    plugins: [new BundleAnalyzerPlugin()],
  },
};
