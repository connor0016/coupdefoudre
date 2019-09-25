//**************************************************
//  Plugin
//**************************************************
import gulp from 'gulp';
import babel from 'gulp-babel';
//  styles
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cleanCSS from 'gulp-clean-css';
//  scripts
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import webpackConfig from './webpack.config';
//  images
import imagemin from 'gulp-imagemin';
import mozjpeg from 'imagemin-mozjpeg';
import pngquant from 'imagemin-pngquant';
//  Other
import browserSync  from 'browser-sync';
import del from 'del';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import debug from 'gulp-debug';
sass.compiler = require('node-sass');
//import rename   from 'gulp-rename';

//**************************************************
//  Paths
//**************************************************
const paths = {
    styles: {
        src: './src/sass/**/*.scss',
        dest: './dist/assets/css'
    },
    scripts: {
        src: './src/js/**/*.js',
        dest: './dist/assets/js'
    },
    images: {
        src: './src/images/*.{jpg,jpeg,png,svg,gif}',
        dest: './dist/assets/images'
    }
};

//**************************************************
//  del
//**************************************************
const clean = () => del([ 'dist/assets' ]);
export { clean };

//**************************************************
//  CSS
//**************************************************
//sass.compiler = require('node-sass');
//console.log(sass.compiler);

export function styles() {
    return gulp.src(paths.styles.src, { sourcemaps: true })
        .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(postcss([autoprefixer()]))
        .pipe(cleanCSS())
        .pipe(gulp.dest(paths.styles.dest, { sourcemaps: './map'}))
        .pipe(browserSync.stream());
}

//**************************************************
//  JS
//**************************************************
export function scripts() {
    return webpackStream(webpackConfig, webpack)
        .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
        .pipe(gulp.dest(paths.scripts.dest))
        .pipe(browserSync.stream());
}

//**************************************************
//  IMG
//**************************************************
export function images() {
    return gulp.src(paths.images.src)
        .pipe(imagemin([
            pngquant({
                quality: [.65, .8]
            }),
            mozjpeg({
                quality: 85
            }),
            imagemin.svgo(),
            imagemin.optipng(),
            imagemin.gifsicle()
        ]
        ))
        .pipe(gulp.dest(paths.images.dest))
        .pipe(browserSync.stream());
}

//**************************************************
//  Watch
//**************************************************
export function watchFiles() {
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch(paths.images.src, images);
}

//**************************************************
//  Browawer-sync
//**************************************************
export function browsersync() {
    browserSync({
        server: {
            baseDir: "./dist",
        }
    });
}

const build = gulp.series(clean, gulp.parallel(styles, scripts, images, browsersync, watchFiles));


/*exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.watch = watch;*/

export default build;
//**************************************************
//  All
//**************************************************
//gulp.task('default', gulp.series(gulp.parallel('browser-sync', 'styles', 'js', 'img', 'watch')));