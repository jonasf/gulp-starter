var config = require('./gulpconfig')

var gulp = require('gulp');
var sass = require('gulp-sass');
var minifycss = require('gulp-minify-css');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');

gulp.task('style', function () {
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
		.pipe(uglify())
		.pipe(jshint.reporter('default', { verbose: true }))
		.pipe(gulp.dest(config.js.dest));
});

gulp.task('build', ['style', 'js', 'copy-static-files']);

gulp.task('default', ['build']);

gulp.task('watch', ['build'], function(){
	gulp.watch(config.sass.src, ['style']);
	gulp.watch(config.js.src, ['js']);
});
