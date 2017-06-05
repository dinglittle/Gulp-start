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