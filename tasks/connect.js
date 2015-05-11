var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

var config = require('./../gulp-config');


// gulp.task('js-watch', ['js'], function() {
//   console.log(1)
//   browserSync.reload;
// });

gulp.task('connect', function() {
   browserSync.init({
    server: config.server.root,
    port: 8080
  });

});
