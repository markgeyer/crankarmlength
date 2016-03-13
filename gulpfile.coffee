gulp = require 'gulp'
stylus = require 'gulp-stylus'
autoprefixer = require 'gulp-autoprefixer'
concat = require 'gulp-concat'
del = require 'del'
browserSync = require 'browser-sync'
reload = browserSync.reload

paths =
	src: './src'
	output: './www'
	npm: './node_modules'
	img: './src/img'
	publish: './.publish'

gulp.task 'clean', (cb) ->
	del [paths.output, paths.publish], cb

gulp.task 'styles', ->
	gulp.src(paths.npm + '/normalize.css/normalize.css')
	.pipe gulp.dest(paths.output + '/css')

	gulp.src(paths.src + '/stylus/*.styl')
	.pipe stylus()
	.pipe autoprefixer()
	.pipe gulp.dest(paths.output + '/css')
	.pipe reload(stream: true)

gulp.task 'angular', ->
	gulp.src([
		paths.npm + '/angular/angular.min.js'
		paths.npm + '/angular-route/angular-route.min.js'
		paths.npm + '/angular-animate/angular-animate.min.js'
		])
	.pipe concat('angular.js')
	.pipe gulp.dest(paths.output + '/js')

gulp.task 'js', ->
	gulp.src(paths.src + '/js/main.js')
	.pipe gulp.dest(paths.output + '/js')
	.pipe reload(stream: true)

gulp.task 'assets', ->
	gulp.src(paths.src + '/*.html')
	.pipe gulp.dest(paths.output)
	.pipe reload(stream: true)

	gulp.src(paths.img + '/**')
	.pipe gulp.dest(paths.output + '/img')

gulp.task 'browser-sync', ->
	browserSync
		open: false
		server: baseDir: paths.output

gulp.task 'watch', ->
	gulp.watch paths.src + '/*.html', ['assets']
	gulp.watch paths.src + '/stylus/**/*.styl', ['styles']
	gulp.watch paths.src + '/js/*.js', ['js']

gulp.task 'default', ['styles', 'angular', 'js', 'assets', 'watch', 'browser-sync']