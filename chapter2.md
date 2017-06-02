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

使用 npm 安装 `gulp-uglify` 到本地，所以找不到此模块

```
npm install gulp-uglify
```

安装成功后你会看到如下信息：
```
gulp-uglify@1.1.0 node_modules/gulp-uglify
├── deepmerge@0.2.7
├── uglify-js@2.4.16 (uglify-to-browserify@1.0.2, async@0.2.10, source-map@0.1.34, optimist@0.3.7)
├── vinyl-sourcemaps-apply@0.1.4 (source-map@0.1.43)
├── through2@0.6.3 (xtend@4.0.0, readable-stream@1.0.33)
└── gulp-util@3.0.4 (array-differ@1.0.0, beeper@1.0.0, array-uniq@1.0.2, object-assign@2.0.0, lodash._reinterpolate@3.0.0, lodash._reescape@3.0.0, lodash._reevaluate@3.0.0, replace-ext@0.0.1, minimist@1.1.1, chalk@1.0.0, lodash.template@3.3.2, vinyl@0.4.6, multipipe@0.1.2, dateformat@1.0.11)
chapter2 $
```

在你的文件夹中会新增一个 `node_modules` 文件夹，这里面存放着 npm 安装的模块。

目录结构：

```
├── gulpfile.js
└── node_modules
	└── gulp-uglify
```

接着输入 `gulp script` 执行任务

```
gulp script
[13:34:57] Using gulpfile ~/Documents/code/gulp-book/demo/chapter2/gulpfile.js
[13:34:57] Starting 'script'...
[13:34:57] Finished 'script' after 6.13 ms
```
---

### 八、编写 js 文件

我们发现 gulp 没有进行任何压缩操作。因为没有js这个目录，也没有js目录下的`.js`后缀文件。

创建`a.js`文件，并缩写如下内容

```
// a.js
function demo (msg) {
    alert('--------\r\n' + msg + '\r\n--------')
}

demo('Hi')
```
目录结构
```
├── gulpfile.js
├──  js
│	└── a.js
└── node_modules
	└── gulp-uglify
```
接着在命令行输入 `gulp script`执行任务

gulp 会在命令行当前目录创建 `dist/js/` 文件夹，并创建压缩后的 `a.js` 文件。

目录结构

```
├── gulpfile.js
├──  js
│	└── a.js
├──  dist
│	└── js
│		└── a.js
└── node_modules
	└── gulp-uglify
```

dist/js/a.js

```
function demo(n){alert("--------\r\n"+n+"\r\n--------")}demo("Hi");
```

---

### 九、检测代码修改自动执行任务

`js/a.js`一旦有修改 就必须重新在命令行输入 `gulp script`，这很麻烦。

可以使用 `gulp.watch(src,fn)` 检测指定目录下文件的修改后执行任务。

在 `gulpfile.js` 中编写如下代码：

```
//在命令行使用 gulp auto 启动任务
gulp.task('auto',function(){
	//监听文件修改，当文件被修改则执行 script 文件
	gulp.watch('js/*.js',['script'])
})
```

接着在命令行输入 `gulp auto` ,自动监听 `js/*.js` 文件的修改后压缩 js.

```
$gulp auto
[21:09:45] Using gulpfile ~/Documents/code/gulp-book/demo/chapter2/gulpfile.js
[21:09:45] Starting 'auto'...
[21:09:45] Finished 'auto' after 9.19 ms
```

此时修改 `js/a.js` 中的代码并保存。命令行将会出现提示，表示检测 到文件修改并压缩文件。

```
[21:11:01] Starting 'script'...
[21:11:01] Finished 'script' after 2.85 ms
```

至此，我们完成了 gulp 压缩 js 文件的自动化代码编写。

－注意：使用 `gulp.watch` 后你的命令会进入“运行”状态，此时你不可以在命令行进行其他操行。可通过 `ctrl+c` 停止 gulp .

Mac 下使用 `control+c` 停止 gulp

### 十、使用 gulp.task('default',fn)定义默认任务

增加如下代码

```
gulp.task('default',['script','auto']);
```

此时，你可以在命令行直接输入 `gulp`+回车，运行 `script` 和 `auto` 任务。

最代码如下：

```
//获取 gulp
var gulp = require('gulp')

//获取 uglify 模块（用于压缩js）
var uglify = require('gulp-uglify')

//压缩js文件
//在命令行使用 gulp script 启动任务
gulp.task('script',fuction(){
	//1.找到文件
	gulp.src('js/*.js')
	//2.压缩
		.pipe(uglify())
	//3.另存压缩后的文件
		.pipe(gulp.dest('dist/js'))
})

//在命令行使用 gulp auto 启动此任务
gulp.task('auto',function(){
	//监听文件修改，当文件被修改则执行 script 任务
	gulp.watch('js/*.js',['script'])
});

//使用　gulp.task('default')定义默认任务
//在命令行使用 gulp 启动  script 任务 和 auto 任务
gulp.task('default',['script','auto'])

```

去除注释后，你会发现只需要11行代码就可以让 gulp 自动监听 js 文件的修改后压缩代码。但是还有一些性能问题和缺少容错性，将在后面的章节详细说明。

你可以访问[gulp-ugify](https://github.com/terinjokes/gulp-uglify)以查看更多用法。

[接着阅读：使用 gulp 压缩 CSS](/chapter3.md)