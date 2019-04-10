const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browsersync = require('browser-sync').create();
const eslint = require('gulp-eslint');


gulp.task('styles', (done) => {
  gulp.src('./sass/**/*.scss')
    .pipe(sass.sync({
      outputStyle: 'compressed',
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
    }))
    .pipe(gulp.dest('./css'));
  done();
});
gulp.task('script', (done) => {
  gulp.src('./js/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format());
  done();
});

gulp.task('default', gulp.series('styles', 'script', (done) => {
  gulp.watch('./sass/**/*.scss', gulp.series('styles'));
  gulp.watch('./js/**/*.js', gulp.series('script'));
  browsersync.init({
    watch: true,
    server: './',
  });
  done();
}));
