'use strict';

const { src, dest } = require('gulp');

const gulp = require('gulp');
const autoPrefixer = require('gulp-autoprefixer');
const cssBeautify = require('gulp-cssbeautify');
const rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'));
const cssNano = require('gulp-cssnano');
const uglify = require('gulp-uglify');
const plumber = require('gulp-plumber');
const rigger = require('gulp-rigger');
const imagemin = require('gulp-imagemin');
const del = require('del');
const notify = require('gulp-notify');
const browserSync = require('browser-sync').create();
const fileInclude = require('gulp-file-include');

/* Paths */
const srcPath = '#src/';
const distPath = 'dist/';

const path = {
  build: {
    html: distPath,
    css: distPath + 'css/',
    js: distPath + 'js/',
    images: distPath + 'images/',
    fonts: distPath + 'fonts/',
  },
  src: {
    html: srcPath + '*.html',
    css: srcPath + 'scss/*.sass',
    js: srcPath + 'js/*.js',
    images:
      srcPath +
      'images/**/*.{jpg,jpeg,png,svg,gif,webp,ico,xml,json,webmanifest}',
    fonts: srcPath + 'fonts/*.{eot,woff,woff2,ttf}',
  },
  watch: {
    html: srcPath + '**/*.html',
    css: srcPath + 'scss/**/*.sass',
    js: srcPath + 'js/**/*.js',
    images:
      srcPath +
      'images/**/*.{jpg,jpeg,png,svg,gif,webp,ico,xml,json,webmanifest}',
  },
  clean: './' + distPath,
};

function serve() {
  browserSync.init({
    server: {
      baseDir: './' + distPath,
    },
    port: 3000,
    notify: false,
  });
}

function html() {
  return src(path.src.html, { base: srcPath })
    .pipe(plumber())
    .pipe(fileInclude())
    .pipe(dest(path.build.html))
    .pipe(browserSync.reload({ stream: true }));
}

function css() {
  return src(path.src.css, { base: srcPath + 'scss/' })
    .pipe(
      plumber({
        errorHandler: function (err) {
          notify.onError({
            title: 'SASS Error',
            message: 'Error: <%= error.message %>',
          })(err);
          this.emit('end');
        },
      })
    )
    .pipe(sass())
    .pipe(autoPrefixer())
    .pipe(cssBeautify())
    .pipe(dest(path.build.css))
    .pipe(
      cssNano({
        zindex: false,
        discardComments: {
          removeAll: true,
        },
      })
    )
    .pipe(
      rename({
        suffix: '.min',
        extname: '.css',
      })
    )
    .pipe(dest(path.build.css))
    .pipe(browserSync.reload({ stream: true }));
}

function js() {
  return src(path.src.js, { base: srcPath + 'js/' })
    .pipe(
      plumber({
        errorHandler: function (err) {
          notify.onError({
            title: 'JS Error',
            message: 'Error: <%= error.message %>',
          })(err);
          this.emit('end');
        },
      })
    )
    .pipe(rigger())
    .pipe(dest(path.build.js))
    .pipe(uglify())
    .pipe(
      rename({
        suffix: '.min',
        extname: '.js',
      })
    )
    .pipe(dest(path.build.js))
    .pipe(browserSync.reload({ stream: true }));
}

function images() {
  return src(path.src.images, { base: srcPath + 'images/' })
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 80, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(dest(path.build.images))
    .pipe(browserSync.reload({ stream: true }));
}

function fonts() {
  return src(path.src.fonts, { base: srcPath + 'fonts/' })
    .pipe(dest(path.build.fonts))
    .pipe(browserSync.reload({ stream: true }));
}

function clean() {
  return del(path.clean);
}

function watchFiles() {
  gulp.watch([path.watch.html], html);
  gulp.watch([path.watch.css], css);
  gulp.watch([path.watch.js], js);
  gulp.watch([path.watch.images], images);
}

const build = gulp.series(clean, gulp.parallel(html, css, js, images, fonts));
const watch = gulp.parallel(build, watchFiles, serve);

exports.html = html;
exports.css = css;
exports.js = js;
exports.images = images;
exports.fonts = fonts;
exports.clean = clean;
exports.build = build;
exports.watch = watch;
exports.default = watch;
