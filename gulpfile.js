var gulp = require('gulp');

var requireDir = require('require-dir');

var runSequence = require('gulp-run-sequence');

requireDir('./tasks', {
  recurse: true
});


gulp.task('dev', function(cb) {
  runSequence('bower','js', 'sass', 'connect', 'watch', cb);
});

gulp.task('build', function(cb) {
  runSequence('images', 'clean', 'usemin', 'copy', cb);
});
