var gulp = require("gulp");

gulp.task("styles", function() {
  return gulp
    .src("*.css") // pipe sends stuff through
    .pipe(gulp.dest("build"));
});

gulp.task("watch", function() {
  gulp.watch("*.css", gulp.series("styles"));
});
