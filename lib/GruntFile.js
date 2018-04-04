module.exports = function(grunt) {

    grunt.initConfig({
      browserify: {
        js: {
            src: ['../js/main.js'],
            dest: '../dist/app.js'
        },
        options: {
            browserifyOptions: {
              paths: ["./node_modules"]
            }
        }
      },
      jshint: {
        options: {
          predef: [ "document", "console" ],
          esnext: true,
          globalstrict: true,
          globals: {},
          browserify: true
        },
        files: ['../js/**/*.js']
      },
      sass: {
        dist: {
          files: {
            '../css/main.css': '../scss/main.scss'
          }
        }
      },
      watch: {
        javascripts: {
          files: ['../js/**/*.js'],
          tasks: ['jshint', 'browserify']
        },
        sass: {
          files: ['../scss/**/*.scss'],
          tasks: ['sass']
        }
      }
    });
  
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.registerTask('default', ['jshint', 'sass', 'browserify', 'watch']);
  };
  