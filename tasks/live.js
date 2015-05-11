var connect = require('gulp-connect');
var gulp = require('gulp');


gulp.task('live', function() {
  gulp.src(['*.html'])
    .pipe(connect.reload());
});