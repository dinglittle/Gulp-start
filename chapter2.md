# 使用 gulp 压缩 JS 
---
请务必理解如下章节后阅读此章节:
1.[安装Node 和 gulp](https://github.com/nimojs/gulp-book/blob/master/chapter1.md)
[访问论坛获取帮助](https://github.com/nimojs/gulp-book/issues/11)

压缩 js 代码可降低js文件大小，提高页面找开速度。在不利用 gulp 时我们需要通过各种工具手机完成压缩工作。

所有的 gulp 代码编写都可以看做是将规律转化为代码的过程。

## 规律
---
找到`js/`目录下的所有js文件，压缩它们，将压缩后的文件存放在`dist/js/`目录下。

## gulp代码
---
你可以 [下载所有示例代码](https://github.com/nimojs/gulp-book/archive/master.zip) 或 [在线查看代码](https://github.com/nimojs/gulp-book/tree/master/demo/chapter2)

**建议:** 你可以只阅读下面的代码与注释或同时阅读代码解释

gulp 的所有配置代码都写在 `gulpfile.js` 文件。

### 一、新建一个 `gulpfile.js` 文件
```
chapter2
 - gulpfile.js
```

---
 
### 二、在`gulpfile.js`中编写代码
```
//获取 gulp
var gulp = require('gulp')
```
require()是node（CommonJS)中获取模块的语法。
在gulp中你只需要理解 require() 可以获取模块。

---

### 三、获取`gulp-uglify`组件
```
//获取 uglify 模块（用于压缩 JS）
var uglify = requier('gulp-uglify')
```

---

### 四、创建压缩任务
```
//压缩 js 文件
//在命令行使用 gulp script 启动此任务
gulp.task('script',function(){
	//1.打到文件
	gulp.src('js/*.js')
	//2.压缩文件
		.pipe(uglify())
	//3.另存压缩后的文件
		.pipe(gulp.dest('dist/js'))
})
```
·`gulp.task(name,fn)` -定义任务，第一个参数是任务名，第二个参数是任务内容
·`gulp.src(path)`-选择文件，传入参数是文件路径
·`gulp.dest(path)`-输出文件
·`gulp.pipe()`-管道，你可以暂时将 pipe 理解为将操作加入执行队列

参数：[gulp API 文档](http://www.gulpjs.com.cn/docs/api/)

---

#### 五、跳转至`gulpfile.js`所在目录

打开命令使用`cd`命令跳转至`gulpfile.js`文件所在目录。

例如我的`gulpfile.js` 文件保存在 `F:\github\gulp-start\chapter2\gulpfile.js`。

那么就需要在命令行输入

```
cd F:\github\gulp-start\chapte2
```
-Mac用户可使用 `cd Documents/gulp-start/chapter2/` 跳转

---

### 六、使用命令行运行 script 任务

在控制台输入 `gulp 任务名` 可运行任务，此处我们输入 `gulp script` 回车

注意：输入`gulp script`后命令行将会提示错误信息

```
//在命令行输入
gulp script

Error:Cannot find module 'gulp=uglify'
	at Function.Module._resolveFilename (module.js:388:15)
	
```

---

### 七、安装`gulu-uglify`模块

因为我们并没有安装`gulp-uglify`模块到本地，所以找不到此模块
