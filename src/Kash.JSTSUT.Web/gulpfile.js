/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp'),
  rimraf = require('gulp-rimraf'),
  concat = require('gulp-concat'),
  rename = require('gulp-rename'),
  sourcemaps = require('gulp-sourcemaps'),
  mainfiles = require('gulp-main-bower-files'),
  filter = require('gulp-filter'),
  less = require('gulp-less'),
  cssmin = require('gulp-clean-css'),
  uglify = require('gulp-uglify');

var filters = {
    js: filter('**/*.js', { restore: true }),
    less: filter('**/*.less', { restore: true }),
    css: filter('**/*.css', { restore: true })
};

var roots = {
    bowercomponents: './bower_components/',
    scripts: './Scripts/',
    fonts: './Content/fonts/',
    css: './Content/css/'
};

var components = {
    bootstrapfonts: roots.bowercomponents + 'bootstrap/dist/fonts/*.*',
};

gulp.task('clear', function () {
    return gulp.src([roots.scripts, roots.fonts, roots.css], { read: false })
        .pipe(rimraf());
});

gulp.task('dev:build', ['clear'], function () { });

gulp.task('dev:bundle-lib-js', ['clear'], function () {
    return gulp.src('./bower.json')
        .pipe(mainfiles())
        .pipe(filterJS)
        .pipe(sourcemaps.init())
            .pipe(concat('lib.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(roots.scripts));
});