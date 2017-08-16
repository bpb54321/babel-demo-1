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
    .pipe(source('bundle.js')) // Creates a blank file that you will write to
    .pipe(buffer()) // This is necessary if you want to use other Gulp plugins
    .pipe(gulp.dest('./'));
});
