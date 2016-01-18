var gulp            = require('gulp'),
    gutil           = require('gulp-util'),

    del             = require('del'),

    settings        = require('../_settings.json');

module.exports = function clean(callback) {
    del(settings.paths.dest.jekyll, callback);
};
