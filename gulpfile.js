var     gulp            = require('gulp'),
        gutil           = require('gulp-util'),
        requireDir      = require('require-dir')
        gulpAutoTask    = require('gulp-auto-task'),

        browserSync     = require('browser-sync').create('jekyll'),
        runSequence     = require('run-sequence'),
        watch           = require('gulp-watch'),

        settings        = require('./_settings.json');

/* Import main tasks */
var     utils           = requireDir('_gulp-tasks');

gulpAutoTask('{*,**/*}.js', {
    base: settings.paths.tasks,
    gulp: gulp
});

gulp.task('default', function(callback) {
    runSequence(['build', 'buildFonts', 'buildCss', 'buildJs']);
});

gulp.task('build', function(callback) {
    return utils.buildJekyll(callback);
});

gulp.task('build:clean', ['clean']);

gulp.task('build:assets', function() {
    runSequence(['buildFonts', 'buildCss', 'buildJs', 'buildImg']);
});

/** Browser Sync */

gulp.task('browser', function() {
    browserSync.init({
        server: "./_site"
    });
});

gulp.task('browser:reload', function() {
    browserSync.reload();
});

/** Server entry */

gulp.task('serve', ['browser'], function() {

    runSequence(['build', 'build:assets'], 'browser:reload');

    watch(settings.paths.src.sass + "/*/**.*", function() {
        runSequence('buildCss', ['browser:reload']);
    });

    watch(settings.paths.src.js_include, function() {
        runSequence('buildJs', ['browser:reload']);
    });

    watch(settings.paths.src.jekyll, function() {
        runSequence(['build', 'build:assets'], 'browser:reload');
    });

    watch(settings.paths.src.img + "/*/**.*", function() {
        runSequence('buildImg', ['browser:reload']);
    });

});
