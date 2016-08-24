var gulp = require('gulp');
var sass = require('gulp-sass');

// Compiles scss
gulp.task('sass', function () {
  return gulp.src('./src/sass/*.scss')
      .pipe(sass({ errLogToConsole: true }))
      .pipe(gulp.dest('./src/css'));
});


gulp.task('watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass']);
