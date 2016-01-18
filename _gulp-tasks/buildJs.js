var     gulp            = require('gulp'),
        gutil           = require('gulp-util'),
        iffer           = require('gulp-if'),

        concat          = require('gulp-concat'),
        sourcemaps      = require('gulp-sourcemaps'),
        uglify          = require('gulp-uglify'),

        settings        = require('../_settings.json');

module.exports = function buildJs() {

    return gulp.src(settings.paths.src.js_include)
        .pipe(iffer(settings.plugins.sourcemaps, sourcemaps.init()))
        .pipe(concat('app.js'))
        .pipe(iffer(settings.production, uglify(settings.plugins.options.uglify)))
        .pipe(iffer(settings.plugins.sourcemaps, sourcemaps.write('.')))
        .pipe(gulp.dest(settings.paths.dest.js))
    ;

};
