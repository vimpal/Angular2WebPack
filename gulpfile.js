/**
 * 
 */

var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
var join = require('path').join;
var reporters   = require('jasmine-reporters');
var ts = require('gulp-typescript');

gulp.task('clean', function () {
  return del('dist/**/*');
});

gulp.task('default', ['clean']);