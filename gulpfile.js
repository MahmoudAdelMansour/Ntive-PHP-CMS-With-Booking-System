// Gulp Identifires  
var gulp = require("gulp"),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    autoprefix = require('gulp-autoprefixer'),
    // pug          = require('gulp-pug') ,
    livereload = require('gulp-livereload'),
    sourcemaps = require('gulp-sourcemaps'),
    minify = require('gulp-minify'),
    beautify = require('gulp-beautify');
// Gulp Tasks Modules
// Gulp PUGjs
gulp.task('beautifyHTMLPHP', function () {
    return gulp.src(["stage/admin/html/**/*.html","stage/admin/html/**/*.php"])
        .pipe(beautify.html({
            indent_size: 2
        }))
        .pipe(gulp.dest('dist/admin'))

});

gulp.task("initTask",function () {
    return gulp.src("stage/admin/management/config/includes/*.php")
        .pipe(beautify.html({
            indent_size : 2
        }))
        .pipe(gulp.dest('dist/admin/management/config/includes/'))
})
gulp.task("managementTask",function () {
    return gulp.src("stage/admin/management/*.php")
        .pipe(beautify.html({
            indent_size : 2
        }))
        .pipe(gulp.dest('dist/admin/management/'))
})
// 
gulp.task("dbTask",function () {
    return gulp.src("stage/admin/management/config/*.php")
        .pipe(beautify.html({
            indent_size : 2
        }))
        .pipe(gulp.dest('dist/admin/management/config/'))
})
// Css Task

gulp.task('css', function () {
    return gulp.src(["stage/admin/css/**/*.css", "stage/admin/css/**/*.scss"])
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'nested'
        }).on('error', sass.logError))
        .pipe(autoprefix())
        .pipe(concat('main.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/admin/css'))

});

// Get All Js In one File

gulp.task('js', function () {
    return gulp.src('stage/admin/js/*.js')
        .pipe(concat('main.js'))
        .pipe(minify())
        .pipe(beautify.js({
            indent_size: 2
        }))
        .pipe(gulp.dest('dist/admin/js'))

});

gulp.task('jsLog', function () {
    return gulp.src('stage/admin/js/private/*.js')
        .pipe(minify())
        .pipe(beautify.js({
            indent_size: 2
        }))
        .pipe(gulp.dest('dist/admin/js'))

});

//Watch All Tasks

gulp.task('watch', function () {
    gulp.watch(["stage/admin/html/**/*.html","stage/admin/html/**/*.php"], gulp.series("beautifyHTMLPHP"))
    gulp.watch(["stage/admin/css/**/*.css", "stage/admin/css/**/*.scss"], gulp.series("css"))
    gulp.watch("stage/admin/js/*.js", gulp.series("js"))
    gulp.watch("stage/admin/js/private/*.js", gulp.series("jsLog"))
    gulp.watch("stage/admin/management/config/includes/*.php", gulp.series("initTask"))
    gulp.watch("stage/admin/management/config/*.php" , gulp.series("dbTask"))
    gulp.watch("stage/admin/management/*.php" , gulp.series("managementTask"))

});
