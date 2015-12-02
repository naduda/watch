var gulp = require('gulp'),
	wiredep = require('wiredep').stream,
	useref = require('gulp-useref'),
	gulpif = require('gulp-if'),
	uglify = require('gulp-uglify'),
	minifyCss = require('gulp-minify-css'),
	rimraf = require('gulp-rimraf'),
	sftp = require('gulp-sftp'),
	connect = require('gulp-connect'),
	livereload = require('gulp-livereload'),
	ts = require('gulp-typescript');

gulp.task('connect', function(){
	connect.server({
		root: 'src',
		port: 8088,
		livereload: true
	});
});

gulp.task('clean', function(){
	return gulp.src('dist', {read: false})
		.pipe(rimraf());
});
 
gulp.task('build', ['clean', 'bower'], function () {
		return gulp.src('src/*.*')
				.pipe(useref())
				.pipe(gulpif('*.js', uglify()))
				.pipe(gulpif('*.css', minifyCss()))
				.pipe(gulp.dest('dist'));
});

gulp.task('bower', function () {
	gulp.src('./src/index.html')
		.pipe(wiredep({
			directory: 'src/bower_components'
		}))
		.pipe(gulp.dest('./src'));
});

gulp.task('html', function(){
	gulp.src('./src/**/*.html')
		.pipe(connect.reload());
});

gulp.task('css', function(){
	gulp.src('./src/css/*.css')
		.pipe(connect.reload());
});

gulp.task('js', function(){
	gulp.src('./src/js/**/*.js')
		.pipe(connect.reload());
});

gulp.task('typescript', function(){
	return gulp.src('./src/ts/**/*.ts')
		.pipe(ts({target: 'ES5'}))
		.pipe(gulp.dest('src/js'));
});

gulp.task('watch', function(){
	gulp.watch('src/css/*.css', ['css']);
	gulp.watch('src/**/*.html', ['html']);
	gulp.watch('src/js/**/*.js', ['js']);
	gulp.watch('src/ts/**/*.ts', ['typescript']);
});

gulp.task('default', ['connect', 'html', 'css', 'js', 'watch']);