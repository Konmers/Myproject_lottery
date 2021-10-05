# Myproject_lottery

## 在线链接

http://yiyaobingo.3vkj.net/lottery/index.html#/

## 项目使用

1. vue项目需要node.js以及npm环境，首先执行`npm install`完成项目的包配置
2. 执行`npm run serve`运行项目


## 项目简介

1. 相较于参考项目更改的地方：

  - 由对应奖品抽取人数 更改为 个人抽取相应奖品

  - 由后端代码决定抽奖的概率
  - 数据库保存剩余奖品的所有数据

2. 简介及小问题：

   - plugins/axios.js文件中放置后端提供的局域网网址，可以进行相应更改
   - 刷新页面之后前台数据无法保存：
     - 由于暂时无法处理js的异步问题，暂时由前台刷新页面之后，向后端发送请求
     - 由后端强刷`lottery-config-users-raw.json`文件，更改整个页面的奖品数量





## 项目记录--放置在CSDN上





## 参考项目

[lottery-3d](https://github.com/geeknull/lottery-3d)
[moshang-xc版本](https://github.com/moshang-xc/lottery)

