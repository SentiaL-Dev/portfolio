var gulp = require('gulp'),
    sass = require('gulp-sass')(require('sass')),
    concat = require('gulp-concat'),
    csso = require('gulp-csso'),
    uglify = require('gulp-uglify');

var cssDir = 'css/',
    jsDir = 'js/';

gulp.task('style', function() {
    return gulp
        .src([
            'sources/scss/index.scss'
        ])
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(csso())
        .pipe(gulp.dest(cssDir));
});
gulp.task('js', function() {
    return gulp
        .src('sources/srcJs/js.js')
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDir));
});

gulp.task('watch', function() {
    gulp.watch('sources/scss/**/*.scss', gulp.series('style'));
    gulp.watch('sources/srcJs/**/*.js', gulp.series('js'));
});

gulp.task('build', gulp.parallel('style', 'js'));
