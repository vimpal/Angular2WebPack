/**
 * 
 */

var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
var join = require('path').join;
var reporters   = require('jasmine-reporters');
var ts = require('gulp-typescript');

gulp.task('scripts', function() {
    return gulp.src('src/js/*.js')
      .pipe(gulp.dest('build/js'));
});

gulp.task('compile', function () {
    return gulp.src('src/**/*.ts')
        .pipe(ts({
            noImplicitAny: true,
            out: 'output.js'
        }))
        .pipe(gulp.dest('built/local'));
});

gulp.task('default', ['compile']);
