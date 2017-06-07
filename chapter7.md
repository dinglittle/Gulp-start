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
  "devDependencies": {
    "gulp": "^3.9.1"
  }
```
声明此项目的开发依赖 gulp

接着安装其它依赖：

-安装模块较多，请耐心等待，若一直安装失败可使用 [npm.taobao.org](http://npm.taobao.org/)

此时，[package.json]()将会更新
```
  "devDependencies": {
    "gulp": "^3.9.1",
    "gulp-autoprefixer": "^4.0.0",
    "gulp-imagemin": "^3.3.0",
    "gulp-less": "^3.3.0",
    "gulp-minify-css": "^1.2.4",
    "gulp-ruby-sass": "^2.1.1",
    "gulp-sourcemaps": "^2.6.0",
    "gulp-uglify": "^3.0.0",
    "gulp-util": "^3.0.8",
    "gulp-watch-path": "^0.1.0",
    "stream-combiner2": "^1.1.1"
  }
```

当你将这份 gulpfile.js 配置分享给你的朋友时，就不需要将 `node_modules/` 发送给他，他只需要在命令行输入
```
npm install
```
就可以检测`package.json` 中的 `devDependencies` 并安装所有依赖

## 设计目录结构
---
我们将文件分为2类，一类是源码，一类是编译压缩后的版本。文件夹分别为`src`和`dist`。(注意区分`dist` 和 `dest` 的区别)

```
└── src/
│
└── dist/
```

`dist/` 目录下的文件都是根据 `src/` 下所有源码文件构建而成。

在`src/`下创建前端资源对应的文件夹

```
└── src/
	├── less/    *.less 文件
	├── sass/    *.scss *.sass 文件
	├── css/     *.css  文件
	├── js/      *.js 文件
	├── fonts/   字体文件
    └── images/   图片
└── dist/
```

你可以点击 [nimojs/gulp-demo](https://github.com/nimojs/gulp-demo)下载本章代码。

## 让命令行输出的文字带颜色
---

gulp自带的输出都带时间和颜色，这样很容易识别。我们利用 [gulp-util]() 实现同样的效果。
```
//获取 gulp
var gulp = require('gulp')
var gutil = require('gulp-util')

//gulp 默认任务
gulp.task('default',function(){
  gutil.log('message')
  gutil.log(gutil.colors.red('error'))
  gutil.log(gutil.colors.green('message:') + "some")
})
```

## 配置 JS 任务

### gulp-uglify

检测 `src/js/`目录下的js文件修改后,压缩`js/`中所有 js 文件并输出到 `dist/js/`中
```
//gulp-uglify 压缩js
var uglify = require('gulp-uglify')

//uglifyjs 任务
gulp.task('uglifyjs',function(){
  gulp.src('src/js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
})

gulp.task('default',function(){
  gulp.watch('src/js/**/*.js',['gulifyjs'])
})
``` 

`src/js**/*.js` 是 glob 语法.[百度百科:glob模式]()、[node-glob](https://github.com/isaacs/node-glob)

在命令行输入`gulp`后会出现如下消息,表示已经启动.

```
[20:39:50] Using gulpfile ~/Documents/code/gulp-book/demo/chapter7/gulpfile.js
[20:39:50] Starting 'default'...
[20:39:50] Finished 'default' after 13 ms
```

此时编辑`src/js/log.js` 文件并保存,命令行会出现如下消息,表示检测到`src/js/**/*.js`文件修改后重新编译所有 js.
```
[20:39:52] Starting 'js'...
[20:39:52] Finished 'js' after 14 ms
```

### gulp-watch-path

此配置有个性能问题,当`gulp-watch`检测到`src/js/` 目录下的js文件有修改时会将所有文件全部编译.实际上我们只需要重新编译被修改的文件.

简单介绍`gulp.watch`第二个参数为`function`时的用法

```
gulp.watch('src/js/**/*.js',function(event){
  console.log(event);
  /*
    当修改 src/js/log.js 文件时
    event{
      //发生改变的类型,不是添加,改变或是删除
      type:'changed',
      //触发事件的文件路径
      path:'Users/lwj/Desk/code/github/gulp/gulp-demo/...js'
    }
  */
})
```
我们可以利用 `event` 给到的信息,检测到某个 js 文件被修改时,只编写当前修改的 js 文件.

可以利用 `gulp-watch-path` 配合 `event` 获取编译路径和输出路径.

```
var watchPath = require('gulp-watch-path')

//gulp-watch-path 任务
gulp.task('watchjs',function(){
	gulp.watch('src/js/**/*.js',function(event){
		console.log(event);
		/*
		当修改 src/js/log.js 文件时
		event{
			//发生改变的类型( changed  added  deleted ) , 不管是添加,改变或是删除
			type:'changed',
			//触发事件的文件路径
			path: 'F:\\github\\gulp-demo\\src\\js\\log.js'
		}
		*/
		var paths = watchPath(event,'src/','dist/')
		/*
		paths
		{
			srcPath:'src/js/log.js',          源文件地址
			srcDir:'src/js/',                 源文件目录
			distPath:'dist/js/log.js',        编译完文件地址
			distDir:'dist/js/',               编译完文件目录
			srcFilename:'log.js',             源文件名字
			distFilenam:'log.js'              编译完文件名字
		}
		*/
		gutil.log(gutil.colors.green(event.type) + '' + paths.srcPath)
		gutil.log('Dist' + paths.distPath)
		
		//paths.srcPath 源文件地址
		gulp.src(paths.srcPath)
			.pipe(uglify())
			.pipe(gulp.dest(paths.distDir))
	})
})

gulp.task('default',['watchjs'])
```
[use-gulp-watch-path 完整代码](https://github.com/nimojs/gulp-book/blob/master/demo/chapter7/use-gulp-watch-path.js)

`watchPath(event, search, replace, distExt)
