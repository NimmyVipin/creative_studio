var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('scripts', function() {
  return gulp.src(['./node_modules/jquery/dist/jquery.js',
  './node_modules/bootstrap-sass/assets/javascripts/bootstrap.js',
  './node_modules/slick-carousel/slick/slick.min.js',
  './source/javascripts/all.js'
   ])
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./source/javascripts'));
});



gulp.task('copy', function() {
return gulp.src('./node_modules/bootstrap-sass/assets/fonts/**')
  .pipe(gulp.dest('./source/fonts'));
  });

gulp.task('watch',function(){
  gulp.watch('./source/javascripts/**/*.js',['scripts'])

});

gulp.task('copyFontAwesome', function(){
  return gulp.src('./node_modules/font-awesome/fonts/**')
    .pipe(gulp.dest('./source/fonts'))
});
gulp.task('copySlickFonts', function(){
  return gulp.src('./node_modules/slick-carousel/slick/fonts/**')
    .pipe(gulp.dest('./source/fonts'))
});




gulp.task('default',['scripts','copy','copyFontAwesome']);
