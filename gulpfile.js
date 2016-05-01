
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var nodemon = require('gulp-nodemon');
var del = require('del');
var exec = require('child_process').exec


// styles
gulp.task('build-styles', function() {
  return gulp.src('client/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 2 version'))
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('dist/build'));
});

// scripts
gulp.task('build-scripts', function() {
  return gulp.src('client/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    // .pipe(jshint.reporter('fail'))
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('dist/build'));
});

var input = {
  vendorStyles: [
    'bower_components/angular-material/angular-material.css'
  ],
  vendorScripts: [
    'bower_components/angular/angular.js',
    'bower_components/angular-ui-router/release/angular-ui-router.js',
    'bower_components/angular-animate/angular-animate.js',
    'bower_components/angular-aria/angular-aria.js',
    'bower_components/angular-messages/angular-messages.js',
    'bower_components/angular-material/angular-material.js',
    'bower_components/underscore/underscore.js'
  ]
};

// vendor styles
gulp.task('build-vendor-styles', function() {
  return gulp.src(input.vendorStyles)
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('dist/vendor'));
});

// vendor scripts
gulp.task('build-vendor-scripts', function() {
  return gulp.src(input.vendorScripts)
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('dist/vendor'));
});

// clean
gulp.task('clean', function() {
  return del(['dist/build', 'dist/vendor']);
});

// watch
gulp.task('watch', function() {
  gulp.watch('client/**/*.scss', ['build-styles']);
  gulp.watch('client/**/*.js', ['build-scripts']);
});

// server
gulp.task('server', function() {
  var child = exec('nodemon server/server.js');
  child.stdout.on('data', function(data) {
    console.log('stdout: ', data);
  });
  child.stderr.on('data', function(data) {
    console.log('stderr: ', data);
  });
  child.on('close', function(code) {
    console.log('closing code: ', code);
  });
});

// default task
gulp.task('default', ['clean'], function() {
  gulp.start(
    'build-styles',
    'build-scripts',
    'build-vendor-styles',
    'build-vendor-scripts',
    'watch',
    'server'
  );
});

