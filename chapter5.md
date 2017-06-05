# ʹ�� gulp ���� LESS
---

�������������½ں��Ķ����½�:

1.[��װ Node �� Gulp](/chapter1.md)

2.[ʹ�� Gulp ѹ�� JS](/chapter2.md)

Less��һ��CSSԤ�������ԣ���������CSS���ԣ�������������������(mixin)�������ȹ��ܣ���CSS����ά����

## ��װ

```
npm install gulp-less
```

## �����÷�
```
//��ȡ gulp
var gulp = require('gulp')

//��ȡ gulp-less ģ��
var less = require('gulp-less')

//���� less
//������������ gulp less ��������
gulp.task('less',function(){
	//1.�ҵ�less�ļ�
	gulp.src('less/**.less')
	//2.����Ϊ css
		.pipe(less())
	//3.����ļ�
		.pipe(gulp.dest('dist/css'))
})

//������������ gulp auto ����������
gulp.task('auto',function(){
	//�����ļ��޸ģ����ļ����޸���ִ�� less ����
	gulp.watch('less/**.less',['less'])
})

//ʹ�� gulp.task('default') ����Ĭ������
//��������ʹ�� gulp ���� less ����� auto ����
gulp.task('default',['less','auto'])
```

[ʹ�� gulp ���� sass](/chapter6.md)