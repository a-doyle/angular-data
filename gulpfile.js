var gulp = require('gulp'),
  gutil = require('gulp-util'),
  webserver = require('gulp-webserver');

gulp.task('js', function() {
  gulp.src('builds/ajs-reg/js/**/*');
});

gulp.task('html', function() {
  gulp.src('builds/ajs-reg/*.html');
});

gulp.task('css', function() {
  gulp.src('builds/ajs-reg/css/*.css');
});

gulp.task('watch', function() {
  gulp.watch('builds/ajs-reg/js/**/*', ['js']);
  gulp.watch('builds/ajs-reg/css/*.css', ['css']);
  gulp.watch(['builds/ajs-reg/*.html',
    'builds/ajs-reg/views/*.html'], ['html']);
});

gulp.task('webserver', function() {
  gulp.src('builds/ajs-reg/')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('default', ['watch', 'html', 'js', 'css', 'webserver']);