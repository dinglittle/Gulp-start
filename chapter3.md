# 使用 gulp 压缩 CSS


请务必理解如下章节后阅读些章节
1.[安装 Node 和 Gulp](/chapter1.md)
2.[使用 gulp 压缩 JS](/chapter2.md)

---
压缩 css 代码可降低 css 文件大小，提高页面找开速度。

我们接着将规律转换为 gulp 代码

## 规律


找到 `css/` 目录下的所有 css 文件，压缩它们，将压缩后的文件存放在 `dist/css/` 目录下。

## gulp 代码
---
你可以 [下载所有示例代码](https://github.com/nimojs/gulp-book/archive/master.zip) 或 [在线查看代码](https://github.com/nimojs/gulp-book/tree/master/demo/chapter2)

当熟悉 [使用 gulp 压缩 JS ](/chapter2) 的方法后，配置压缩 CSS 的 gulp 代码 就变得很轻松。

-gulp-minify-css 已经被废弃 请使用 [gulp-clean-css](https://github.com/scniro/gulp-clean-css)

### 一、安装 gulp-minify-css 模块

提示：你需要使用命令行的 `cd` 切换到对应目录后进行安装操作。

在命令行输入

```
npm install gulp-minify-css
```
安装成功信息

```
gulp-minify-css@1.0.0 node_modules/gulp-minify-css
├── object-assign@2.0.0
├── vinyl-sourcemaps-apply@0.1.4 (source-map@0.1.43)
├── clean-css@3.1.8 (commander@2.6.0, source-map@0.1.43)
├── through2@0.6.3 (xtend@4.0.0, readable-stream@1.0.33)
├── vinyl-bufferstream@1.0.1 (bufferstreams@1.0.1)
└── gulp-util@3.0.4 (array-differ@1.0.0, beeper@1.0.0, array-uniq@1.0.2, lodash._reescape@3.0.0, lodash._reinterpolate@3.0.0, lodash._reevaluate@3.0.0, replace-ext@0.0.1, minimist@1.1.1, multipipe@0.1.2, vinyl@0.4.6, chalk@1.0.0, lodash.template@3.3.2, dateformat@1.0.11)
```

