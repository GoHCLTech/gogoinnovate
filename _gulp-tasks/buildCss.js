var gulp            = require('gulp'),
    gutil           = require('gulp-util'),
    iffer           = require('gulp-if'),

    autoprefixer    = require('gulp-autoprefixer'),
    minifier        = require('gulp-minify-css'),
    sass            = require('gulp-sass'),
    sourcemaps      = require('gulp-sourcemaps'),

    settings        = require('../_settings.json');

module.exports = function buildCss() {

    return gulp.src(settings.paths.src.sass + '/app.sass')
        .pipe(iffer(settings.plugins.sourcemaps, sourcemaps.init()))
        .pipe(sass({
            outputStyle: 'compact',
            includePaths: settings.paths.src.sass_include
        }))
        .pipe(iffer(settings.plugins.autoprefixer, autoprefixer(settings.plugins.options.autoprefixer)))
        .pipe(iffer(settings.production, minifier(settings.plugins.options.minifier)))
        .pipe(iffer(settings.plugins.sourcemaps, sourcemaps.write('.')))
        .pipe(gulp.dest(settings.paths.dest.css))
    ;

};
