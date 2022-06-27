const gulp = require('gulp')
const htmlmin = require('gulp-htmlmin')
const cleanCSS = require('gulp-clean-css')
const { series } = require('gulp')
const uglify = require('gulp-uglify-es').default
const imagemin = require('gulp-imagemin')
const livereload = require('gulp-livereload')
 
gulp.task('minify-html', () => {
  return gulp.src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'))
    .pipe(livereload())
})

gulp.task('minify-css', () => {
  return gulp.src('src/*.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('dist'))
    .pipe(livereload())
})
 
gulp.task('minify-js', function() {
  return gulp.src('src/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
    .pipe(livereload())
})

gulp.task('copy-assets', function () {
  return gulp.src('src/assets/*/*')
    .pipe(gulp.dest('dist/assets'));
})

gulp.task('default', series('minify-html', 'minify-css', 'minify-js', 'copy-assets'))

gulp.task('build', series('minify-html', 'minify-css', 'minify-js', 'copy-assets'))

gulp.task('watch', () => {
    require('./server.js')
    livereload.listen()

    gulp.watch('src/*', series('minify-html', 'minify-css', 'minify-js'))
})
