const gulp = require('gulp');

module.exports = () => gulp
    .src('audio/**/*')
    .pipe(gulp.dest('dist/audio'));
