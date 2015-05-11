var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

var config = require('./../gulp-config');

gulp.task('watch', function() {
    gulp.watch(config.js.watch, ['js',  browserSync.reload]);
    gulp.watch(config.sass.watch, ['sass'], browserSync.reload);
    gulp.watch(config.bower.file, ['bower']),
    gulp.watch(config.live.path, ['live'])
});


  // gulp.watch(config.js.watch, ['js-watch']);
  // gulp.watch(config.sass.watch, ['sass']);
  // gulp.watch(config.bower.file, ['bower']).on('change', reload);
  // gulp.watch(config.live.path).on('change', reload);