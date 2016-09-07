var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
var reporters = require('jasmine-reporters');

gulp.task('default', function() {
    gulp.src('~/code2/bowling/test/bowlingTest.js')
        // gulp-jasmine works on filepaths so you can't have any plugins before it
        .pipe(jasmine())
});
