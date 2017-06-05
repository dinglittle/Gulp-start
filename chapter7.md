# 使用 gulp 构建一个项目

[访问论坛获取帮助](https://github.com/nimojs/gulp-book/issues/16)

本章将介绍

·[gulp-watch-path](https://github.com/nimojs/gulp-watch-path)

·[strem-combiner2](https://github.com/gulpjs/gulp/blob/master/docs/recipes/combining-streams-to-handle-errors.md)

·[gulp-sourcemaps](https://github.com/gulp-sourcemaps/gulp-sourcemaps)

·[gulp-autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer)

并将之前所有章节的内容组合起来编写一个前端项目所需的 gulp 代码。

你可以在 [minojs/glp-demo](https://github.com/nimojs/gulp-demo)查看完整代码。

若你不了解 npm 请务必阅读 [npm 模块管理器](http://javascript.ruanyifeng.com/nodejs/npm.html)

## package.json
---
如果你熟悉 npm 则可以利用 `package.json` 保存所有 `npm install --save-dev gulp-xxx` 模块依赖和模块版本。

在命令输入

```
npm init
```
会依次要求补全项目信息，不清楚的可以直接回车跳过

```
name: (gulp-demo)
version: (1.0.0)
description: gulp demo
entry point: (index.js)
test command:
git repository:
keywords:
author: lwj
license: (ISC)
About to write to F:\github\gulp-demo\package.json:

{
  "name": "gulp-demo",
  "version": "1.0.0",
  "description": "gulp demo",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "lwj",
  "license": "ISC"
}


Is this ok? (yes)
```

最终会在当前目录中创建 `package.json` 文件并生成类似如下代码：
```
{
  "name": "gulp-demo",
  "version": "0.0.0",
  "description": "",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/nimojs/gulp-demo.git"
  },
  "keywords": [
    "gulp",
  ],
  "author": "nimojs <nimo.jser@gmail.com>",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/nimojs/gulp-demo/issues"
  },
  "homepage": "https://github.com/nimojs/gulp-demo"
}
```

## 安装依赖

安装 gulp 到项目(防止全局 gulp 升级后与此项目 `gulpfile.js` 代码不兼容)
```
npm install gulp --save-dev
```
此时打开 `package.json` 会发现多了如下代码
```
 "devDependencies":{
	"gulp":"^3.8.11"
 }
```