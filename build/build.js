const webpack = require("webpack");
const config = require("./webpack.pord.conf");

webpack(config, (err, stats) => {
  if (err || stats.hasErrors()) {
    //  处理错误
    console.log(err);
    return;
  }

  //处理完成
  console.log(
    stats.toString({
      chunks: false, //使构建过程更静默无输出
      color: true, // 在控制台显示颜色
    })
  );
});
