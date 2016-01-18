var     gulp            = require('gulp'),
        gutil           = require('gulp-util'),
        exec              = require('child_process').exec
        settings        = require('../_settings.json');

module.exports = function buildJekyll(callback, env) {

    var cmd = 'bundle exec jekyll build';
    if (settings.production) {
        cmd += ' --drafts';
    }

    return exec(cmd, function(error, stdout, stderror) {
        gutil.log(stdout);
        return callback(error !== null ? 'ERROR: Jekyll process terminated with code: ' + error.code: null);
    });

};
