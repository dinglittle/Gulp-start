# ʹ�� gulp ѹ��ͼƬ

�������������½ں��Ķ����½�

1.[��װ Node �� Gulp](/chapter1.md)

2.[ʹ�� Gulp �� ѹ�� JS](/chapter2.md)

---

ѹ��ͼƬ�ļ����Խ����ļ���С�����ͼƬ�����ٶ�

�ҵ�����ת��Ϊ gulp ����

## ����
---
�ҵ�`images/`Ŀ¼�µ������ļ���ѹ�����ǣ���ѹ������ļ������ `dist/images/` Ŀ¼�¡�

## gulp����
---
### һ����װ gulp-imagemin ģ��

��ʾ������Ҫʹ�������е�`cd`�л�����ӦĿ¼�ٽ��а�װ������ gulp ����������

[ѧϰʹ��������](/chapter1.md)

������������

```
npm install gulp-imagemin
```

��װ�ɹ�����ῴ��������Ϣ:(��װʱ����Ի�Ƚϳ�)

```
gulp-imagemin@2.2.1 node_modules/gulp-imagemin
������ object-assign@2.0.0
������ pretty-bytes@1.0.3 (get-stdin@4.0.1)
������ chalk@1.0.0 (escape-string-regexp@1.0.3, ansi-styles@2.0.1, supports-color@1.3.1, has-ansi@1.0.3, strip-ansi@2.0.1)
������ through2-concurrent@0.3.1 (through2@0.6.3)
������ gulp-util@3.0.4 (array-differ@1.0.0, beeper@1.0.0, array-uniq@1.0.2, lodash._reevaluate@3.0.0, lodash._reescape@3.0.0, lodash._reinterpolate@3.0.0, replace-ext@0.0.1, minimist@1.1.1, vinyl@0.4.6, through2@0.6.3, multipipe@0.1.2, lodash.template@3.3.2, dateformat@1.0.11)
������ imagemin@3.1.0 (get-stdin@3.0.2, optional@0.1.3, vinyl@0.4.6, through2@0.6.3, stream-combiner@0.2.1, concat-stream@1.4.7, meow@2.1.0, vinyl-fs@0.3.13, imagemin-svgo@4.1.2, imagemin-optipng@4.2.0, imagemin-jpegtran@4.1.0, imagemin-pngquant@4.0.0, imagemin-gifsicle@4.1.0)
```

### �������� `gulpfile.js` �ļ���д����

�ڶ�ӦĿ¼���� `gulpfile.js` �ļ���д�����´���
```
//��ȡ gulp 
var gulp = require('gulp');

//��ȡ gulp-imagemin ģ��
var imagemin = require('gulp-imagemin')

//ѹ��ͼƬ����
//������������ gulp images ����������
gulp.task('images',function(){
	//1.�ҵ�ͼƬ
	gulp.src('images/*.*')
	//2.ѹ��ͼƬ
		.pipe(imagemin({
			progressive:true
		}))
	//3.���ͼƬ
		.pipe(gulp.dest('dist/images'))
});

//��������ʹ�� gulp auto ��������
gulp.task('auto',function(){
	//�����ļ��޸ģ����ļ����޸���ִ�� images ����
	gulp.watch('images/*.*',['images'])
})

//ʹ�� gulp.task('default') ����Ĭ������
//��������ʹ�� gulp ���� images ���� �� auto ����
gulp.task('default',['images','auto'])
```

����Է���[gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin)�Բ鿴�����÷�

### ������`images/`Ŀ¼�´��ͼƬ

�� `gulpfile.js` ��ӦĿ¼���� `images` �ļ��У����� `images/` Ŀ¼�´��ͼƬ��

����Է��� [��ַ](https://github.com/nimojs/gulp-book/tree/master/demo/chapter4/images/) ����ʾ��ͼƬ

### �ġ����� gulp �鿴Ч��

������������ `gulp` + �س�

�㽫���������г���������ʾ

```
gulp
[18:10:42] Using gulpfile ~/Documents/code/gulp-book/demo/chapter4/gulpfile.js
[18:10:42] Starting 'images'...
[18:10:42] Finished 'images' after 5.72 ms
[18:10:42] Starting 'auto'...
[18:10:42] Finished 'auto' after 6.39 ms
[18:10:42] Starting 'default'...
[18:10:42] Finished 'default' after 5.91 ��s
[18:10:42] gulp-imagemin: Minified 3 images (saved 25.83 kB - 5.2%)
```

[�����Ķ���ʹ�� gulp ���� LESS](/chapter5)