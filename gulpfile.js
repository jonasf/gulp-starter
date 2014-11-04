var config = require('./gulpconfig')

var gulp = require('gulp');
var sass = require('gulp-sass');
var minifycss = require('gulp-minify-css');

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

gulp.task('build', ['sass', 'copy-static-files']);

gulp.task('default', ['build']);

gulp.task('watch', ['build'], function(){
	gulp.watch(config.sass.src, ['sass']);
});
