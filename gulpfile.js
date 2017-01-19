var _path=require('path'),
	gulp=require('gulp'),
	clean=require('gulp-clean'),
	minify=require('gulp-minify-css'),
	uglify=require('gulp-uglify');

var src={
	css:_path.resolve(__dirname,'assets/css/*.css'),
	main:_path.resolve(__dirname,'assets/js/*.js'),
	lib:_path.resolve(__dirname,'assets/js/lib/*.js')
};

var dist={
	css:_path.resolve(__dirname,'dist/css/'),
	main:_path.resolve(__dirname,'dist/js/'),
	lib:_path.resolve(__dirname,'dist/js/lib/')
};

gulp.task('default',['minify-css','uglify','copy']);

gulp.task('clean',function(){
	return gulp.src(_path.resolve(__dirname,'dist/*'))
		.pipe(clean({force:true}));
});

gulp.task('minify-css',['clean'],function(){
	gulp.src(src.css)
		.pipe(minify())
		.pipe(gulp.dest(dist.css));
});

gulp.task('uglify',['clean'],function(){
	gulp.src(src.main)
		.pipe(uglify())
		.pipe(gulp.dest(dist.main));
});

gulp.task('copy',['clean'],function(){
	gulp.src(src.lib)
		.pipe(gulp.dest(dist.lib));
});