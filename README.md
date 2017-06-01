# Gulp 入门指南
https://github.com/nimojs/gulp-book

---
gulp就基于 node 实现 web 前端自动化的开发工具，利用它能够极大的提高开发效率。

在 web 前端开发工作中有很多“重复工作”，比如压缩 CSS/JS 文件。而这些工作都是有规律的。
找到这些规律，并编写 gulp 配置代码，让 gulp 自动执行这些“重复工作”。

---
## 安装 Node 和 Gulp 
---
gulp是基于 node 实现的，那么我们就需要先安装 node.
-node是一个基于 Chrome JavaScript V8 引擎建立的一个平台，可以利用它实现 Web 服务，做类似 PHP 的事。

打开 https://nodejs.org/ 点击绿色的 **INSTALL** 按钮下载安装 node .

## 使用终端/命令行
---
### 命令行

在 windows 中可按 win+R 打开 cmd + enter 打开命令行

### 终端(Mac)

打开 Launchpad(像火箭一样的图标)，在屏幕上方搜索框中输入  终端 + enter 打开终端

### 查看 node 版本号

在终端/命令行中输入 `node -v` 检测 node 是否安装成功，安装成功会显示出 node 的版本号。

### 跳转目录

终端/命令行中可以使用 cd 目录名 跳转至指定目录，Mac中还可以使用 ls 查看当前目录下的文件列表。

**windows**
windows 下可使用如下命令跳转指定目录：
```
//跳转至 C 盘目录
cd c:\
//跳转至当前目录的 dome 文件夹
cd demo
//跳转至上一级
cd ..
```

**Mac**
Mac中建议只在 Documents 目录下进行文件操作。
```
//跳转至文件目录
cd /User/你的用户名/Documents/
//或第一次打开终端时直接接入
cd Documents
//查看目录下文件列表
ls
//创建文件夹
mkdir demo
//跳转至当前目录下的 demo 文件夹
cd demo
//跳转至上级目录
cd ..
```

### 退出运行状态

如果你在命令行中启动了一些一直运行的命令，你的命令行会进入“运行”状态，此时你不可以在命令进行其他操作。
可通过 `ctrl+c` 停止  gulp 。(Mac中使用 `control+c`)

后面的章节中如果代码中存在`gulp.watch`并在命令运行了`gulp`则需要使用`ctrl+c`退出任务。

## npm模块管理器
---
http://javascript.ruanyifeng.com/nodejs/npm.html

## 安装gulp
---
npm是node的包管理工具，可以利用它安装 gulp 所需的包。(在安装node时已经自动安装了npm)
在命令行输入
```
npm instll -g gulp
```
若一直没有安装成功，请用[cnpm](https://github.com/nimojs/blog/issues/20)安装

意思是： 使用 npm 安装全局性的(-g)gulp包。

-如果你安装失败，请输入` sudo npm install -g gulp`使用管理员权限安装.

安装时请注意命令行的提示信息，安装完成后可以命令行输入`gulp -v`以确认安装成功。

至此，我们完成了准备工作，

---

# 使用 gulp 压缩 JS
---
请务必理解如下章节后阅读此章节:
1.安装Node 和 gulp

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