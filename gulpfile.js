const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps")

function styles() {
	return gulp
		.src(".src/styles/*.scss")
    .pipe(sourcemaps.init())
		.pipe(sass({ outputStyle: "compressed" }))
		.on("error", sass.logError)
    .pipe(sourcemaps.write('./maps'))
		.pipe(gulp.dest("./dist/css"));
}

exports.default = function () {
	styles();

	gulp.watch(".src/styles/*.scss", styles);
};
