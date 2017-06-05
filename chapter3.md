# ʹ�� gulp ѹ�� CSS


�������������½ں��Ķ�Щ�½�

1.[��װ Node �� Gulp](/chapter1.md)

2.[ʹ�� gulp ѹ�� JS](/chapter2.md)

---
ѹ�� css ����ɽ��� css �ļ���С�����ҳ���ҿ��ٶȡ�

���ǽ��Ž�����ת��Ϊ gulp ����

## ����


�ҵ� `css/` Ŀ¼�µ����� css �ļ���ѹ�����ǣ���ѹ������ļ������ `dist/css/` Ŀ¼�¡�

## gulp ����

����� [��������ʾ������](https://github.com/nimojs/gulp-book/archive/master.zip) �� [���߲鿴����](https://github.com/nimojs/gulp-book/tree/master/demo/chapter2)

����Ϥ [ʹ�� gulp ѹ�� JS ](/chapter2) �ķ���������ѹ�� CSS �� gulp ���� �ͱ�ú����ɡ�

-gulp-minify-css �Ѿ������� ��ʹ�� [gulp-clean-css](https://github.com/scniro/gulp-clean-css)

### һ����װ gulp-minify-css ģ��

��ʾ������Ҫʹ�������е� `cd` �л�����ӦĿ¼����а�װ������

������������

```
npm install gulp-minify-css
```
��װ�ɹ���Ϣ

```
gulp-minify-css@1.0.0 node_modules/gulp-minify-css
������ object-assign@2.0.0
������ vinyl-sourcemaps-apply@0.1.4 (source-map@0.1.43)
������ clean-css@3.1.8 (commander@2.6.0, source-map@0.1.43)
������ through2@0.6.3 (xtend@4.0.0, readable-stream@1.0.33)
������ vinyl-bufferstream@1.0.1 (bufferstreams@1.0.1)
������ gulp-util@3.0.4 (array-differ@1.0.0, beeper@1.0.0, array-uniq@1.0.2, lodash._reescape@3.0.0, lodash._reinterpolate@3.0.0, lodash._reevaluate@3.0.0, replace-ext@0.0.1, minimist@1.1.1, multipipe@0.1.2, vinyl@0.4.6, chalk@1.0.0, lodash.template@3.3.2, dateformat@1.0.11)
```

### ��������[ʹ�� gulp ѹ�� JS](/chapter2.md) ���� `gulpfile.js` �ļ���д����

�ڶ�ӦĿ¼���� `gulpfile.js` �ļ�����д����������

```
//��ȡ gulp
var gulp = require('gulp')

//��ȡ minify-css ģ�飨����ѹ��CSS��
var minifyCSS = require('gulp-minify-css')

//ѹ�� css �ļ�
//��������ʹ�� gulp css ��������
gulp.task('css',function(){
	//1.�ҵ��ļ�
	gulp.src('css/*.css')
	//2.ѹ���ļ�
		.pipe(minifyCSS())
	//3.��� ѹ������ļ�
		.pipe(gulp.dest('dist/css'))
})

//��������ʹ�� gulp auto ��������
gulp.task('auto',function(){
	//�����ļ��޸ģ����ļ����޸���ִ�� css ����
	gulp.watch('css/*.css',['css'])
	
})

//ʹ�� gulp.task('default')����Ĭ������
//��������ʹ�� gulp ���� css ����� auto ����
gulp.task('default',['css','auto'])
```

����Է��� [gulp-minify-css](https://www.npmjs.com/package/gulp-minify-css)�Բ鿴�����÷�

### �������� gulp �鿴Ч��

������������ `gulp` + �س�

�㽫��������������������ʾ

```
gulp
[17:01:19] Using gulpfile ~/Documents/code/gulp-book/demo/chapter3/gulpfile.js
[17:01:19] Starting 'css'...
[17:01:19] Finished 'css' after 6.21 ms
[17:01:19] Starting 'auto'...
[17:01:19] Finished 'auto' after 5.42 ms
[17:01:19] Starting 'default'...
[17:01:19] Finished 'default' after 5.71 ��s
```

gulp �ᴴ�� `dist/css` Ŀ¼�������� `a.css` �ļ������ļ����ѹ����� css ���롣 [dist/css/index.css](./chapter3/dist/css/index.css)

[������̳��ȡ����](https://github.com/nimojs/gulp-book/issues/12)

[�����Ķ���ʹ�� gulp ѹ��ͼƬ](/chapter4.md)