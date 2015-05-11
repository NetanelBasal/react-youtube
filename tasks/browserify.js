var browserify = require('browserify');
var gulp = require('gulp');
var source = require("vinyl-source-stream");
var reactify = require('reactify');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var buffer = require('vinyl-buffer');
var notify = require("gulp-notify");
var gulpif = require('gulp-if');
var to5ify = require('6to5ify');

var config = require('./../gulp-config');


gulp.task('js', function() {
  var onError = function(err) {
    notify.onError({
      title: "Gulp",
      subtitle: "JS Failure!",
      message: "Error: <%= error.message %>",
      sound: "Beep"
    })(err);
  };

  return browserify(config.js.src, {
    debug: true
  })
    .transform(to5ify)
    .transform(reactify)
    .bundle()
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(gulpif(config.build, uglify()))
    .pipe(source(config.js.mainFileName))
    .pipe(buffer())
    .pipe(gulp.dest(config.js.dist))
    .pipe(notify("Js Finished!"));
});