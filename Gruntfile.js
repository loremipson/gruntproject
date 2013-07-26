'use strict';
module.exports = function(grunt) {

	grunt.initConfig({

		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: [{
					expand: true,
					cwd: 'assets/styles/sass',
					src: ['*.sass', '!_*.sass'],
					dest: 'assets/styles/',
					ext: '.css'
				}]
			}
		},

		watch: {
			options: {
				livereload: true
			},
			sass: {
				files: ['assets/styles/sass/**/*.sass'],
				tasks:['sass']
			},
			livereload: {
				files: ['assets/styles/**/*.css']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', 'watch');
}