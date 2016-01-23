var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var mqpacker = require('css-mqpacker');
var csswring = require('csswring');
var less = require('gulp-less');
var path = require('path');
//编译less文件，压缩，处理后缀后在输出到指定文件夹
gulp.task('less', function() {
    var processors = [
        autoprefixer({
            browsers: ['last 4 versions']
        }),
        //mqpacker,
        //csswring,
    ];
    return gulp.src('./*.less')
        .pipe(less())
        .pipe(postcss(processors))
        .pipe(gulp.dest('./'));


});
//监听less文件，如出现改动则自动编译
gulp.task('watch', function() {
    gulp.watch('./*.less', ['less']);
});
gulp.task('default', ['less','watch']);
