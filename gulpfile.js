var config = require('./gulpconfig')

var gulp = require('gulp');
var sass = require('gulp-sass');
var minifycss = require('gulp-minify-css');
var jshint = require('gulp-jshint');

gulp.task('sass', function () {
    gulp.src(config.sass.src)
        .pipe(sass())
        .pipe(minifycss())
        .pipe(gulp.dest(config.sass.dest));
});

gulp.task('copy-static-files', function() {
    gulp.src(config.staticfiles.src)
    .pipe(gulp.dest(config.staticfiles.dest));
});

gulp.task('js', function() {
	gulp.src(config.js.src)
		.pipe(jshint())
		.pipe(jshint.reporter('default', { verbose: true }));
});

gulp.task('build', ['sass', 'js', 'copy-static-files']);

gulp.task('default', ['build']);

gulp.task('watch', ['build'], function(){
	gulp.watch(config.sass.src, ['sass']);
	gulp.watch(config.js.src, ['js']);
});
