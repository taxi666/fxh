module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        //Read the package.json (optional)
        pkg: grunt.file.readJSON('package.json'),

        // Metadata.
        meta: {
            basePath: '../',
            srcPath: '../sass/',
            deployPath: '../styles/'
        },

        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
                '* Copyright (c) <%= grunt.template.today("yyyy") %> ',

        // Task configuration.
        compass: {
            dist: {
                files: {
                    '<%= meta.deployPath %>*.css': '<%= meta.srcPath %>*.scss'
                },
                options: {
                   outputStyle: 'expanded'
                }
            }
        },
        sass: {
            dist00: {
                files: {
                    '<%= meta.deployPath %>*.css': '<%= meta.srcPath %>*.scss'
                },
                options: {
                    sourcemap: 'true'
                }
            }
        },
        watch: {
            client: {
                files: [
                    '<%= meta.srcPath %>/**/*.scss'
                ],
                options: {
                    livereload: true
                },
                tasks: ['compass']
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task.
    grunt.registerTask('default', ['sass']);
};