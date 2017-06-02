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
