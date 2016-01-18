var gulp            = require('gulp'),

    settings        = require('../_settings.json');

module.exports = function buildFonts () {

    return gulp.src(settings.paths.src.fonts)
        .pipe(gulp.dest(settings.paths.dest.fonts))
    ;

};
