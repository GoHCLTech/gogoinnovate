var gulp            = require('gulp'),
    gutil           = require('gulp-util'),
    iffer           = require('gulp-if'),

    imagemin        = require('gulp-imagemin');
    imgresponsive   = require('gulp-responsive');

    settings        = require('../_settings.json');

module.exports = function buildImg() {

    return gulp.src(settings.paths.src.img + '/**/*')
        .pipe(imgresponsive(
            {
                '*.jpg': {
                    width: settings.plugins.options.imgresponsive.maxWidth
                },
                '**/*.jpg': {
                    width: settings.plugins.options.imgresponsive.maxWidth
                },
                '*.png': {
                    width: settings.plugins.options.imgresponsive.maxWidth
                },
                '**/*.png': {
                    width: settings.plugins.options.imgresponsive.maxWidth
                },
            }, settings.plugins.options.imgresponsive
        ))
        .pipe(imagemin(settings.plugins.options.imagemin))
        .pipe(gulp.dest(settings.paths.dest.img))
    ;

};
