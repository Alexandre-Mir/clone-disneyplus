const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");

const imagemin = require("gulp-imagemin");
const webp = require("imagemin-webp");
const changed = require("gulp-changed");

const paths = {
	styles: {
		src: "./src/styles/*.scss",
		dest: "./dist/css",
	},
	images: {
		src: "./src/images/**/*.{jpg,jpeg,png,gif,webp}",
		dest: "./dist/images",
	},
};

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
		.pipe(imagemin([webp({ quality: 75 })], { verbose: true }))
		.pipe(gulp.dest(paths.images.dest));
}

exports.default = function () {
	styles();
	gulp.watch(paths.styles.src, styles);
	gulp.watch(paths.images.src, optimizeImages);
};

exports.images = optimizeImages;
