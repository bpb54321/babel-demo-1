import gulp from 'gulp';
import babelify from 'babelify';
import browserify from 'browserify';
import buffer from 'vinyl-buffer';
import source from 'vinyl-source-stream';

gulp.task('default', () => {
  var bundler = browserify('app.js');
  bundler.transform(babelify);

  bundler.bundle()
    .on('error', (err) => { console.error(err); })
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./'));
});
