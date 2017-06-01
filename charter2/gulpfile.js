//获取模块
var gulp = require('gulp')

//获取 uglify 模块,(用于 压缩js)
var uglify = require('gulp-uglify')

//创建压缩任务
//压缩js文件
//在命令行使用 gulp script 启动此任务

gulp.task('script',function(){
	//查找文件
	gulp.src('js/*.js')
	//压缩文件
		.pipe(uglify())
	//另存压缩后的文件
		.pipe(gulp.dest('dist/js'))
})


