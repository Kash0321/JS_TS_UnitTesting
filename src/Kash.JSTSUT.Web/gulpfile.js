/// <binding />
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
  cssmin = require('gulp-uglifycss'),
  uglify = require('gulp-uglify');

var filters = {
    js: filter('**/*.js', { restore: true }),
    less: filter('**/*.less', { restore: true }),
    css: filter('**/*.css', { restore: true }),
    all: filter('**/*.*', { restore: true })
};

var paths = {
    bowercomponents: './bower_components/',
    scripts: './Scripts/',
    fonts: './Content/fonts/',
    css: './Content/css/'
};

var components = {
    bootstrapfonts: paths.bowercomponents + 'bootstrap/dist/fonts/*.*',
    appstyles: './ContentDev/*.css',
    appjs: './ScriptsDev/*.js'
};

gulp.task('cmn:clear', function () {
    return del([paths.scripts + '**/*.js', '!' + paths.scripts + '_references.js', paths.fonts, paths.css]);
});

gulp.task('_dev:build', ['cmn:clear', 'cmn:fonts', 'dev:bundle-lib-js', 'dev:bundle-app-js', 'dev:bundle-lib-css-less', 'dev:bundle-app-css'], function () { });
gulp.task('_prd:build', ['cmn:clear', 'cmn:fonts', 'prd:bundle-lib-js', 'prd:bundle-app-js', 'prd:bundle-lib-css-less', 'prd:bundle-app-css'], function () { });

gulp.task('dev:bundle-lib-js', ['cmn:clear'], function () {
    return gulp.src('./bower.json')
        .pipe(mainfiles())
        .pipe(filters.js)
        .pipe(sourcemaps.init())
            .pipe(concat('lib.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.scripts));
});

gulp.task('prd:bundle-lib-js', ['cmn:clear'], function () {
    return gulp.src("./bower.json")
    .pipe(mainfiles())
    .pipe(filters.js)
    .pipe(concat("lib.js"))
    .pipe(uglify())
    .pipe(gulp.dest(paths.scripts));
});

gulp.task('dev:bundle-lib-css-less', ['cmn:clear'], function () {
    return gulp.src('./bower.json')
        .pipe(mainfiles())
        .pipe(filters.less)
        .pipe(sourcemaps.init())
            .pipe(less())
            .pipe(concat('lib.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.css));
});

gulp.task('prd:bundle-lib-css-less', ['cmn:clear'], function () {
    return gulp.src('./bower.json')
        .pipe(mainfiles())
        .pipe(filters.less)
        .pipe(less())
        .pipe(concat("lib.css"))
        .pipe(cssmin({ 'uglyComments': true }))
        .pipe(gulp.dest(paths.css));
});

gulp.task('dev:bundle-app-css', ['cmn:clear'], function () {
    return gulp.src(components.appstyles)
        .pipe(sourcemaps.init())
            .pipe(concat('site.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.css));
});

gulp.task('prd:bundle-app-css', ['cmn:clear'], function () {
    return gulp.src(components.appstyles)
        .pipe(concat('site.css'))
        .pipe(cssmin({ 'uglyComments': true }))
        .pipe(gulp.dest(paths.css));
});

gulp.task('dev:bundle-app-js', ['cmn:clear'], function () {
    return gulp.src(components.appjs)
        .pipe(sourcemaps.init())
            .pipe(concat('app.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.scripts));
});

gulp.task('prd:bundle-app-js', ['cmn:clear'], function () {
    return gulp.src(components.appjs)
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest(paths.scripts));
});

gulp.task('cmn:fonts', ['cmn:clear'], function () {
    return gulp.src(components.bootstrapfonts)
        .pipe(gulp.dest(paths.fonts))
});