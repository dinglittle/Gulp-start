# 使用 gulp 编译 LESS
---

请务必理解如下章节后阅读此章节:

1.[安装 Node 和 Gulp](/chapter1.md)

2.[使用 Gulp 压缩 JS](/chapter2.md)

Less是一门CSS预处理语言，它扩充了CSS语言，增加了诸如变量、混合(mixin)、函数等功能，让CSS更易维护。

## 安装

```
npm install gulp-less
```

## 基本用法
```
//获取 gulp
var gulp = require('gulp')

//获取 gulp-less 模块
var less = require('gulp-less')

//编译 less
//在命令行输入 gulp less 启动任务
gulp.task('less',function(){
	//1.找到less文件
	gulp.src('less/**.less')
	//2.编译为 css
		.pipe(less())
	//3.另存文件
		.pipe(gulp.dest('dist/css'))
})

//在命令行输入 gulp auto 启动此任务
gulp.task('auto',function(){
	//监听文件修改，当文件被修改则执行 less 任务
	gulp.watch('less/**.less',['less'])
})

//使用 gulp.task('default') 定义默认任务
//在命令行使用 gulp 启动 less 任务和 auto 任务
gulp.task('default',['less','auto'])
```

[使用 gulp 编译 sass](/chapter6.md)