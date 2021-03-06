let porject_folder = require("path").basename(__dirname);
let source_folder = "src";

let path = {
  build: {
    html: porject_folder + "/",
    css: porject_folder + "/assets/style/",
    js: porject_folder + "/assets/js/",
    img: porject_folder + "/assets/img/",
    fonts: porject_folder + "/assets/fonts/",
  },

  src: {
    html: [source_folder + "/*.html", "!" + source_folder + "/+*.html"],
    css: [source_folder + "/assets/style/*.scss", source_folder + "/assets/style/reset.css"],
    js: source_folder + "/assets/js/*.js",
    img: source_folder + "/assets/img/**/*.{jpg,png,svg,gif,ico,webp}",
    fonts: source_folder + "/assets/fonts/*.otf",
  },

  watch: {
    html: source_folder + "/*.html",
    css: source_folder + "/assets/style/*.scss",
    js: source_folder + "/assets/js/*.js",
    img: source_folder + "/assets/img/**/*.{jpg,png,svg,gif,ico,webp}",
  },
  clean: "./" + porject_folder + "/"
}

const { src, dest } = require('gulp'),
  gulp = require('gulp'),
  browsersync = require("browser-sync").create(),
  fileinclude = require("gulp-file-include"),
  del = require("del"),
  scss = require("gulp-sass"),
  autoprefixer = require("gulp-autoprefixer"),
  group_media = require("gulp-group-css-media-queries"),
  clean_css = require("gulp-clean-css"),
  rename = require("gulp-rename"),
  uglify = require("gulp-uglify-es").default,
  imagemin = require("gulp-imagemin");

function browserSync(params) {
  browsersync.init({
    server: {
      baseDir: "./" + porject_folder + "/"
    },
    port: 3000,
    notify: false
  })
}

function html() {
  return src(path.src.html)
    .pipe(fileinclude())
    .pipe(dest(path.build.html))
    .pipe(browsersync.stream())
}

function css() {
  return src(path.src.css)
    .pipe(
      scss({
        outputStyle: "expanded"
      })
    )
    .pipe(
      group_media()
    )
    .pipe(
      autoprefixer({
        overrideBrowserlist: ["last 5 versions"],
        cascade: true
      })
    )
    .pipe(dest(path.build.css))
    .pipe(clean_css())
    .pipe(
      rename({
        extname: ".min.css"
      })
    )
    .pipe(dest(path.build.css))
    .pipe(browsersync.stream())
}

function js() {
  return src(path.src.js)
    .pipe(fileinclude())
    .pipe(dest(path.build.js))
    .pipe(
      uglify()
    )
    .pipe(
      rename({
        extname: ".min.js"
      })
    )
    .pipe(dest(path.build.js))
    .pipe(browsersync.stream())
}

function images() {
  return src(path.src.img)
    .pipe(
      imagemin({
        progressive: true,
        svgoPlugins: [{ removeViewBox: true }],
        interlaced: true,
        optimizationLevel: 5
      })
    )
    .pipe(dest(path.build.img))
    .pipe(browsersync.stream())
}

function watchFiles(params) {
  gulp.watch([path.watch.html], html);
  gulp.watch([path.watch.css], css);
  gulp.watch([path.watch.js], js);
  gulp.watch([path.watch.img], images);
}

function clean(params) {
  return del(path.clean);
}

let build = gulp.series(clean, html, css, images, js);
let watch = gulp.parallel(build, watchFiles, browserSync);


exports.images = images;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;