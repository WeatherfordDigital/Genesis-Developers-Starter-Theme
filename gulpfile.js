'use strict';

var gulp = require('gulp'),
	bourbon = require('bourbon').includePaths,
	neat = require('bourbon-neat').includePaths,
	sass = require('gulp-sass'),
	autoprefixer = require('autoprefixer');

gulp.task('styles', function(){

	return gulp.src('assets/sass/style.scss')
				.pipe( sass({
					includePaths: [].concat( bourbon, neat ),
					errLogToConsole: true,
					outputStyle: 'expanded' // Options: nested, expanded, compact, compressed
				}))
				.pipe(gulp.dest('./'));

});

gulp.task('autoprefixer', function() {

	return gulp.src( './style.css' )
		pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('dist'));
});


gulp.task('watch', function () {
	gulp.watch('assets/sass/**/*.scss', ['styles']);
});