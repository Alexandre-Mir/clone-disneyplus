const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify");
const imagemin = require("gulp-imagemin");
const changed = require("gulp-changed");

const paths = {
	styles: {
		src: "./src/styles/*.scss",
		dest: "./dist/css",
	},
	images: {
		src: "./src/images/**/*.{jpg,jpeg,png,gif,webp,svg,ico}",
		dest: "./dist/images",
	},
	scripts: {
		src: "./src/js/*.js",
		dest: "./dist/js",
	},
};

function scripts() {
	return gulp
		.src(paths.scripts.src)
		.pipe(sourcemaps.init())
		.pipe(uglify())
		.pipe(sourcemaps.write("./maps"))
		.pipe(gulp.dest(paths.scripts.dest));
}

function styles() {
	return gulp
		.src(paths.styles.src)
		.pipe(sourcemaps.init())
		.pipe(sass({ outputStyle: "compressed" }))
		.on("error", sass.logError)
		.pipe(sourcemaps.write("./maps"))
		.pipe(gulp.dest(paths.styles.dest));
}

function optimizeImages() {
	return gulp
		.src(paths.images.src)
		.pipe(changed(paths.images.dest))
		.pipe(
			imagemin([
				imagemin.gifsicle({ interlaced: true }),
				imagemin.mozjpeg({ quality: 75, progressive: true }),
				imagemin.optipng({ optimizationLevel: 5 }),
			])
		)
		.pipe(gulp.dest(paths.images.dest));
}

function watch() {
	gulp.watch(paths.styles.src, styles);
	gulp.watch(paths.images.src, optimizeImages);
	gulp.watch(paths.scripts.src, scripts);
}

exports.default = gulp.parallel(styles, optimizeImages, scripts);
exports.watch = watch;
exports.build = gulp.parallel(styles, optimizeImages, scripts);
exports.images = optimizeImages;
