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