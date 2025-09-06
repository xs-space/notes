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
        test: /\.css$/, // 正则匹配
        // 1.loader的写法（语法糖）
        // loader: "css-loader",

        // 2.完整写法
        use: [
          //   {
          //     loader: "css-loader",
          //     options: {}, // css-loader的配置选项
          //   },
          "style-loader", // 负责将样式插入到head的标签中
          "css-loader", // 负责将css文件变成commonjs模块加载到js中
        ],
      },
    ],
  },
};
