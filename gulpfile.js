const gulp         = require('gulp'),
      babel        = require('gulp-babel'),
      watchify     = require('watchify'),
      browserify   = require('browserify'),
      babelify     = require("babelify")
      source       = require('vinyl-source-stream'),
      sourcemaps   = require('gulp-sourcemaps')

const path = {
  html: 'src/index.html',
  tsx: 'src/index.tsx',
  dest: 'dist',
  destFile: 'bundle.js',
  all: ['src/*.tsx', 'src/**/*.tsx', 'src/index.html'],
  extensions: '*.tsx',
}

// Dev fules

gulp.task('html', () =>
  gulp.src(path.html)
    .pipe(gulp.dest(path.dest))
)

gulp.task('dev', () => {
  // May need to be overwritten by watchify
  var bundler = browserify({
    entries: [path.tsx],
    extensions: [path.extensions],
    debug: true,
    cache: {},
    packageCache: {},
    transform: ['babelify']
  })

  function bundle() {
    return bundler
      .transform(babelify, {
        sourceType: "module",
        presets: [
          ['@babel/preset-env', {modules: false}],
          '@babel/preset-react',
          '@babel/typescript'
        ]})
      .bundle()
      .on('error', (err) => console.error(err))
      .pipe(source(path.destFile))
      // .pipe(sourcemaps.init({loadMaps: true}))
      // .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(path.dest))
  }

  bundler = watchify(bundler)
  bundler.on('update', bundle)

  return bundle()
})

