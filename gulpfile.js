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

gulp.task('compile', ['clean'], function () {
  return gulp
    .src('src/app/**/*.ts')
    .pipe(typescript(tscConfig.compilerOptions))
    .pipe(gulp.dest('dist/app'));
});

gulp.task("resources",['clean'], function() {
    return gulp.src(["src/**/*", "!**/*.ts"])
        .pipe(gulp.dest("dist"));
});

gulp.task('watch', function () {
    gulp.watch(["src/**/*.ts"], ['compile']).on('change', function (e) {
        console.log('TypeScript file ' + e.path + ' has been changed. Compiling.');
    });
    gulp.watch(["src/**/*.html", "src/**/*.css"], ['resources']).on('change', function (e) {
        console.log('Resource file ' + e.path + ' has been changed. Updating.');
    });
});

gulp.task('default', ['resources'], function(){
  console.log("Building the project ...");
});
