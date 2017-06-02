# ʹ�� gulp ѹ�� JS 
---
�������������½ں��Ķ����½�:
1.[��װNode �� gulp](https://github.com/nimojs/gulp-book/blob/master/chapter1.md)
[������̳��ȡ����](https://github.com/nimojs/gulp-book/issues/11)

ѹ�� js ����ɽ���js�ļ���С�����ҳ���ҿ��ٶȡ��ڲ����� gulp ʱ������Ҫͨ�����ֹ����ֻ����ѹ��������

���е� gulp �����д�����Կ����ǽ�����ת��Ϊ����Ĺ��̡�

## ����
---
�ҵ�`js/`Ŀ¼�µ�����js�ļ���ѹ�����ǣ���ѹ������ļ������`dist/js/`Ŀ¼�¡�

## gulp����
---
����� [��������ʾ������](https://github.com/nimojs/gulp-book/archive/master.zip) �� [���߲鿴����](https://github.com/nimojs/gulp-book/tree/master/demo/chapter2)

**����:** �����ֻ�Ķ�����Ĵ�����ע�ͻ�ͬʱ�Ķ��������

gulp ���������ô��붼д�� `gulpfile.js` �ļ���

### һ���½�һ�� `gulpfile.js` �ļ�
```
chapter2
 - gulpfile.js
```

---
 
### ������`gulpfile.js`�б�д����
```
//��ȡ gulp
var gulp = require('gulp')
```
require()��node��CommonJS)�л�ȡģ����﷨��
��gulp����ֻ��Ҫ��� require() ���Ի�ȡģ�顣

---

### ������ȡ`gulp-uglify`���
```
//��ȡ uglify ģ�飨����ѹ�� JS��
var uglify = requier('gulp-uglify')
```

---

### �ġ�����ѹ������
```
//ѹ�� js �ļ�
//��������ʹ�� gulp script ����������
gulp.task('script',function(){
	//1.���ļ�
	gulp.src('js/*.js')
	//2.ѹ���ļ�
		.pipe(uglify())
	//3.���ѹ������ļ�
		.pipe(gulp.dest('dist/js'))
})
```
��`gulp.task(name,fn)` -�������񣬵�һ�����������������ڶ�����������������
��`gulp.src(path)`-ѡ���ļ�������������ļ�·��
��`gulp.dest(path)`-����ļ�
��`gulp.pipe()`-�ܵ����������ʱ�� pipe ���Ϊ����������ִ�ж���

������[gulp API �ĵ�](http://www.gulpjs.com.cn/docs/api/)

---

#### �塢��ת��`gulpfile.js`����Ŀ¼

������ʹ��`cd`������ת��`gulpfile.js`�ļ�����Ŀ¼��

�����ҵ�`gulpfile.js` �ļ������� `F:\github\gulp-start\chapter2\gulpfile.js`��

��ô����Ҫ������������

```
cd F:\github\gulp-start\chapte2
```
-Mac�û���ʹ�� `cd Documents/gulp-start/chapter2/` ��ת

---

### ����ʹ������������ script ����

�ڿ���̨���� `gulp ������` ���������񣬴˴��������� `gulp script` �س�

ע�⣺����`gulp script`�������н�����ʾ������Ϣ

```
//������������
gulp script

Error:Cannot find module 'gulp=uglify'
	at Function.Module._resolveFilename (module.js:388:15)
	
```

---

### �ߡ���װ`gulu-uglify`ģ��

��Ϊ���ǲ�û�а�װ`gulp-uglify`ģ�鵽���أ������Ҳ�����ģ��

ʹ�� npm ��װ `gulp-uglify` �����أ������Ҳ�����ģ��

```
npm install gulp-uglify
```

��װ�ɹ�����ῴ��������Ϣ��
```
gulp-uglify@1.1.0 node_modules/gulp-uglify
������ deepmerge@0.2.7
������ uglify-js@2.4.16 (uglify-to-browserify@1.0.2, async@0.2.10, source-map@0.1.34, optimist@0.3.7)
������ vinyl-sourcemaps-apply@0.1.4 (source-map@0.1.43)
������ through2@0.6.3 (xtend@4.0.0, readable-stream@1.0.33)
������ gulp-util@3.0.4 (array-differ@1.0.0, beeper@1.0.0, array-uniq@1.0.2, object-assign@2.0.0, lodash._reinterpolate@3.0.0, lodash._reescape@3.0.0, lodash._reevaluate@3.0.0, replace-ext@0.0.1, minimist@1.1.1, chalk@1.0.0, lodash.template@3.3.2, vinyl@0.4.6, multipipe@0.1.2, dateformat@1.0.11)
chapter2 $
```

������ļ����л�����һ�� `node_modules` �ļ��У����������� npm ��װ��ģ�顣

Ŀ¼�ṹ��

```
������ gulpfile.js
������ node_modules
	������ gulp-uglify
```

�������� `gulp script` ִ������

```
gulp script
[13:34:57] Using gulpfile ~/Documents/code/gulp-book/demo/chapter2/gulpfile.js
[13:34:57] Starting 'script'...
[13:34:57] Finished 'script' after 6.13 ms
```
---

### �ˡ���д js �ļ�

���Ƿ��� gulp û�н����κ�ѹ����������Ϊû��js���Ŀ¼��Ҳû��jsĿ¼�µ�`.js`��׺�ļ���

����`a.js`�ļ�������д��������

```
// a.js
function demo (msg) {
    alert('--------\r\n' + msg + '\r\n--------')
}

demo('Hi')
```
Ŀ¼�ṹ
```
������ gulpfile.js
������  js
��	������ a.js
������ node_modules
	������ gulp-uglify
```
���������������� `gulp script`ִ������

gulp ���������е�ǰĿ¼���� `dist/js/` �ļ��У�������ѹ����� `a.js` �ļ���

Ŀ¼�ṹ

```
������ gulpfile.js
������  js
��	������ a.js
������  dist
��	������ js
��		������ a.js
������ node_modules
	������ gulp-uglify
```

dist/js/a.js

```
function demo(n){alert("--------\r\n"+n+"\r\n--------")}demo("Hi");
```

---

### �š��������޸��Զ�ִ������

`js/a.js`һ�����޸� �ͱ������������������� `gulp script`������鷳��

����ʹ�� `gulp.watch(src,fn)` ���ָ��Ŀ¼���ļ����޸ĺ�ִ������

�� `gulpfile.js` �б�д���´��룺

```
//��������ʹ�� gulp auto ��������
gulp.task('auto',function(){
	//�����ļ��޸ģ����ļ����޸���ִ�� script �ļ�
	gulp.watch('js/*.js',['script'])
})
```

���������������� `gulp auto` ,�Զ����� `js/*.js` �ļ����޸ĺ�ѹ�� js.

```
$gulp auto
[21:09:45] Using gulpfile ~/Documents/code/gulp-book/demo/chapter2/gulpfile.js
[21:09:45] Starting 'auto'...
[21:09:45] Finished 'auto' after 9.19 ms
```

��ʱ�޸� `js/a.js` �еĴ��벢���档�����н��������ʾ����ʾ��� ���ļ��޸Ĳ�ѹ���ļ���

```
[21:11:01] Starting 'script'...
[21:11:01] Finished 'script' after 2.85 ms
```

���ˣ���������� gulp ѹ�� js �ļ����Զ��������д��

��ע�⣺ʹ�� `gulp.watch` ������������롰���С�״̬����ʱ�㲻�����������н����������С���ͨ�� `ctrl+c` ֹͣ gulp .

Mac ��ʹ�� `control+c` ֹͣ gulp

### ʮ��ʹ�� gulp.task('default',fn)����Ĭ������

�������´���

```
gulp.task('default',['script','auto']);
```

��ʱ���������������ֱ������ `gulp`+�س������� `script` �� `auto` ����

��������£�

```
//��ȡ gulp
var gulp = require('gulp')

//��ȡ uglify ģ�飨����ѹ��js��
var uglify = require('gulp-uglify')

//ѹ��js�ļ�
//��������ʹ�� gulp script ��������
gulp.task('script',fuction(){
	//1.�ҵ��ļ�
	gulp.src('js/*.js')
	//2.ѹ��
		.pipe(uglify())
	//3.���ѹ������ļ�
		.pipe(gulp.dest('dist/js'))
})

//��������ʹ�� gulp auto ����������
gulp.task('auto',function(){
	//�����ļ��޸ģ����ļ����޸���ִ�� script ����
	gulp.watch('js/*.js',['script'])
});

//ʹ�á�gulp.task('default')����Ĭ������
//��������ʹ�� gulp ����  script ���� �� auto ����
gulp.task('default',['script','auto'])

```

ȥ��ע�ͺ���ᷢ��ֻ��Ҫ11�д���Ϳ����� gulp �Զ����� js �ļ����޸ĺ�ѹ�����롣���ǻ���һЩ���������ȱ���ݴ��ԣ����ں�����½���ϸ˵����

����Է���[gulp-ugify](https://github.com/terinjokes/gulp-uglify)�Բ鿴�����÷���

[�����Ķ���ʹ�� gulp ѹ�� CSS](/chapter3.md)