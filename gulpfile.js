const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browsersync = require('browser-sync').create();
const eslint = require('gulp-eslint');

gulp.task('default', ['styles', 'script'], () => {
  gulp.watch('./sass/**/*.scss', ['styles']);
  gulp.watch('./js/**/*.js', ['script']);
  browsersync.init({
    watch: true,
    server: './',
  });
});

gulp.task('styles', () => {
  gulp.src('./sass/**/*.scss')
    .pipe(sass.sync({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
    }))
    .pipe(gulp.dest('./css'));
});
gulp.task('script', () => {
  gulp.src('./js/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});
