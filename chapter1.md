# 安装 Node 和 Gulp 
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
---

[接着阅读：使用 gulp 压缩 js](/chapter2.md)