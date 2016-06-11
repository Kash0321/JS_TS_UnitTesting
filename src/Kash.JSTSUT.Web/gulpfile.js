/// <binding BeforeBuild='_dev:build' Clean='cmn:clear' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp'),
  del = require('del'),
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
    appstyles: './ContentDev/**/*.css'
};

gulp.task('cmn:clear', function () {
    return del([roots.scripts + '**/*.js', '!' + roots.scripts + '_references.js', roots.fonts, roots.css]);
});

gulp.task('_dev:build', ['cmn:clear', 'cmn:fonts', 'dev:bundle-lib-js', 'dev:bundle-lib-css-less', 'dev:bundle-app-css'], function () { });

gulp.task('dev:bundle-lib-js', ['cmn:clear'], function () {
    return gulp.src('./bower.json')
        .pipe(mainfiles())
        .pipe(filters.js)
        .pipe(sourcemaps.init())
            .pipe(concat('lib.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(roots.scripts));
});

gulp.task('dev:bundle-lib-css-less', ['cmn:clear'], function () {
    return gulp.src('./bower.json')
        .pipe(mainfiles())
        .pipe(filters.less)
        .pipe(sourcemaps.init())
            .pipe(less())
            .pipe(concat('lib.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(roots.css));
});

gulp.task('dev:bundle-app-css', ['cmn:clear'], function () {
    return gulp.src(components.appstyles)
        .pipe(sourcemaps.init())
            .pipe(concat('site.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(roots.css));
});

gulp.task('cmn:fonts', ['cmn:clear'], function () {
    return gulp.src([components.bootstrapfonts])
        .pipe(gulp.dest(roots.fonts))
});