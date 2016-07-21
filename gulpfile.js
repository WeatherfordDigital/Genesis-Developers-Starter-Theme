'use strict';

var gulp = require('gulp'),
	bourbon = require('bourbon').includePaths,
	neat = require('bourbon-neat').includePaths,
	sass = require('gulp-sass'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	cssMQpacker = require('css-mqpacker'),
	sourcemaps = require('gulp-sourcemaps');

gulp.task('styles', function(){

	return gulp.src('assets/sass/style.scss')

	           // Wrap tasks in a sourcemap
			.pipe( sourcemaps.init())

			.pipe( sass({
				includePaths: [].concat( bourbon, neat ),
				errLogToConsole: true,
				outputStyle: 'expanded' // Options: nested, expanded, compact, compressed
			}))

		   .pipe( postcss([
			   autoprefixer({
				   browsers: ['last 2 versions']
			   }),
			   cssMQpacker({
			   	    sort: true
			   })
		   ]))

			// creates the sourcemap
			.pipe(sourcemaps.write())

			.pipe(gulp.dest('./'));

});

gulp.task('watch', function () {
	gulp.watch('assets/sass/**/*.scss', ['styles']);
});