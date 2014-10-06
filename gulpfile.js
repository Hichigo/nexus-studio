var gulp = require('gulp'),
		less = require('gulp-less'),
		concatCss = require('gulp-concat-css'),
		minifyCSS = require('gulp-minify-css'),
		rename = require("gulp-rename"),
		csscomb = require('gulp-csscomb'),
		autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function() {
  
});



//CONCAT----------------------------------------------------------------------
//gulp.task('default', function () {
//  gulp.src('assets/**/*.css')
//    .pipe(concatCss("styles/bundle.css"))
//    .pipe(gulp.dest('out/'));
//});

//less to css--------------------------------------------------------------
//gulp.task('less', function () {
//  gulp.src('./less/**/*.less')
//    .pipe(less({
//      paths: [ path.join(__dirname, 'less', 'includes') ]
//    }))
//    .pipe(gulp.dest('./public/css'));
//});

//minify css---------------------------------------------------------------
//gulp.task('minify-css', function() {
//  gulp.src('./static/css/*.css')
//    .pipe(minifyCSS({keepBreaks:true}))
//    .pipe(gulp.dest('./dist/'))
//});

//rename--------------------------------------------------------------------
//gulp.task('minify-css', function() {
//  gulp.src("./src/main/text/hello.txt")
//    .pipe(rename({
//        dirname: "main/text/ciao",
//        basename: "aloha",
//        prefix: "bonjour-",
//        suffix: "-hola",
//        extname: ".md"
//    }))
//    .pipe(gulp.dest("./dist"));
//});

//csscomb------------------------------------------------------------------
//gulp.task('styles', function () {
//    return gulp.src('src/styles/main.css')
//        .pipe(csscomb())
//        .pipe(gulp.dest('./build/css'));
//});

//autopreffixer------------------------------------------------------------
//gulp.task('default', function () {
//	gulp.src('src/app.css')
//			.pipe(autoprefixer({
//					browsers: ['last 8 versions'],
//					cascade: false
//			}))
//			.pipe(gulp.dest('dist'));
//});