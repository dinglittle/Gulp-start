//��ȡģ��
var gulp = require('gulp')

//��ȡ uglify ģ��,(���� ѹ��js)
var uglify = require('gulp-uglify')

//����ѹ������
//ѹ��js�ļ�
//��������ʹ�� gulp script ����������

gulp.task('script',function(){
	//�����ļ�
	gulp.src('js/*.js')
	//ѹ���ļ�
		.pipe(uglify())
	//���ѹ������ļ�
		.pipe(gulp.dest('dist/js'))
})


