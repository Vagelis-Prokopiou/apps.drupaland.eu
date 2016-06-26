var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

var config = {
    outputStyle: 'compressed'
};

// Static server
gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("index.html").on('change', browserSync.reload);
    gulp.watch("./sass/*.scss",['sass']);
    gulp.watch("./css/*.css").on('change', browserSync.reload);
    gulp.watch("./partials/*.html").on('change', browserSync.reload);
});

gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass(config).on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('default', ['sass', 'browser-sync']);