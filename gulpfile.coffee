gulp = require 'gulp'
react = require 'gulp-react'
concat = require 'gulp-concat'

gulp.task 'build:react', () ->
  gulp.src 'src/**/*.jsx'
    .pipe react()
    .pipe gulp.dest 'lib/'

gulp.task 'build:concat', () ->
  gulp.src 'lib/**/*.js'
    .pipe concat('index.js')
    .pipe gulp.dest 'public/js'

gulp.task 'copy:react', () ->
  gulp.src 'node_modules/react/dist/react.js'
    .pipe gulp.dest 'public/js'

gulp.task 'watch', () ->
  gulp.watch 'src/**/*.jsx', [ 'build' ]

gulp.task 'build', [ 'build:react', 'build:concat' ]
