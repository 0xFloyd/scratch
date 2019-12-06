var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function() {
    return gulp.src('*.css')
    .pipe(autoprefixer())       // pipe sends stuff through
    .pipe(gulp.dest('build'));
});

gulp.task('watch', function() {
    gulp.watch('flexbox.css', gulp.series('styles'));
});