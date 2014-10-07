var gulp = require('gulp'),
		less = require('gulp-less'),
		concatCss = require('gulp-concat-css'),
		minifyCSS = require('gulp-minify-css'),
		rename = require("gulp-rename"),
		csscomb = require('gulp-csscomb'),
		autoprefixer = require('gulp-autoprefixer'),
		notify = require("gulp-notify");

gulp.task('lessToCss', function() {
  gulp.src('dev/less/*.less')
    .pipe(less())
    .pipe(gulp.dest('dev/css/'));
});

gulp.task('concat', function () {
  gulp.src('dev/css/*.css')
    .pipe(concatCss('style.css'))
		.pipe(autoprefixer({
			browsers: ['last 8 versions'],
			cascade: false
		}))
		.pipe(csscomb())
    .pipe(gulp.dest('release/css/'))
});

gulp.task('minify', function () {
	gulp.src('release/css/style.css')
		.pipe(minifyCSS({keepBreaks:true}))
		.pipe(gulp.dest('release/css/'))
		.pipe(notify("Complete!"));
});

gulp.task('default', function () {
	gulp.watch('dev/less/*.less', ['lessToCss']);
	gulp.watch('dev/css/*.css', ['concat']);
	gulp.watch('release/css/style.css', ['minify']);
});