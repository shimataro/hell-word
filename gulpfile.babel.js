import gulp from "gulp";
import babel from "gulp-babel";
import rename from "gulp-rename";

const BABEL_OPTIONS_PRESET_ENV = {
	targets: {
		node: "current",
	},
	useBuiltIns: true,
};
const BABEL_OPTIONS_PRESET_ENV_MJS = Object.assign({
	modules: false,
}, BABEL_OPTIONS_PRESET_ENV);

// default task
gulp.task("default", () =>
{
	gulp.start("build");
});

// build task (all)
gulp.task("build", ["build:cjs", "build:mjs"], () =>
{
});

// build task (CJS)
gulp.task("build:cjs", () =>
{
	const options = {
		presets: [
			["env", BABEL_OPTIONS_PRESET_ENV],
		],
		babelrc: false,
	};

	gulp.src("src/*.es")
		.pipe(babel(options))
		.pipe(gulp.dest('dist'));
});

// build task (ES Modules)
gulp.task("build:mjs", () =>
{
	const options = {
		presets: [
			["env", BABEL_OPTIONS_PRESET_ENV_MJS],
		],
		babelrc: false,
	};

	gulp.src("src/*.es")
		.pipe(babel(options))
		.pipe(rename({extname: ".mjs"}))
		.pipe(gulp.dest('dist'));
});
