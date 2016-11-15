/**
 * 
 */

var gulp = require('gulp');
var typescript = require('gulp-typescript');
const del = require('del');
const tscConfig = require('./tsconfig.json');

gulp.task('clean', function () {
  return del('dist/**/*');
});

gulp.task('compile', ['resources'], function () {
  return gulp
    .src('src/app/**/*.ts')
    .pipe(typescript(tscConfig.compilerOptions))
    .pipe(gulp.dest('dist/app'));
});

gulp.task('resources', ['clean'], function() {
  return gulp.src(['app/**/*', 'index.html', '!app/**/*.ts'], { base : './src' })
    .pipe(gulp.dest('dist'))
});

gulp.task('default', ['compile']);
