/**
 * 
 */

var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
var join = require('path').join;
var reporters   = require('jasmine-reporters');
var ts = require('gulp-typescript');
const del = require('del');

gulp.task('clean', function () {
  return del('dist/**/*');
});

gulp.task('compile', ['clean'], function () {
  return gulp
    .src('app/**/*.ts')
    .pipe(typescript(tscConfig.compilerOptions))
    .pipe(gulp.dest('dist/app'));
});

gulp.task('default', ['compile']);
