const { options } = require("less");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: ["style-loader", "css-loader", "postcss-loader", "less-loader"],
      },
      // {
      //   test: /\.(jpg|png|gif|jpeg|svg)$/,
      //   use: {
      //     loader: "file-loader",
      //     options: {
      //       name: "[name]_[hash:6].[ext]", // ext表示文件后缀名
      //       outputPath: "img", // 打包后的图片放在dist/img目录下
      //     },
      //   },
      // },
      // {
      //   test: /\.(jpg|png|gif|jpeg|svg)$/,
      //   use: {
      //     loader: "url-loader",
      //     options: {
      //       name: "[name]_[hash:6].[ext]", // ext表示文件后缀名
      //       outputPath: "img", // 打包后的图片放在dist/img目录下
      //       limit: 100 * 1024, // 小于100kb的图片打包成base64格式
      //     },
      //   },
      // },
      // 图片资源
      {
        test: /\.(jpg|png|gif|jpeg|svg)$/,
        type: "asset",
        generator: {
          filename: "img/[name]_[hash:6][ext]", // ext表示文件后缀名
        },
        // 图标资源
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024, // 小于100kb的图片打包成base64格式
          },
        },
      },
      {
        test: /\.(eot|ttf|woff2?|svg)$/,
        generator: {
          filename: "font/[name]_[hash:6][ext]", // ext表示文件后缀名
        },
      },
    ],
  },
};
