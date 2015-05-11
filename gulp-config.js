// The paths are relative to the gulpfile.js

var config = {

  build: false,

  server: {
    root: './'
  },

  js: {
    mainFileName: 'main.js',
    src         : './client/js/main.js',
    dist        : './client/build',
    watch       : ['./client/js/**/**/*.js']

  },

  sass: {
    src  : './client/sass/main.scss',
    dist : './client/build',
    watch: ['./client/sass/**/*.scss', './client/js/components/**/**/**/*.scss']
  },

  img: {
    src : './client/img/**/**/*.{png,gif,jpg,jpeg}',
    dist: './client/img/'
  },

  bower: {
    src : './index.html',
    dist: './',
    file: './bower.json'
  },

  live: {
    path: ['./*.html']
  },

  copy: {
    src : ['./client/img'],
    dist: './production'
  }

}

module.exports = config;
