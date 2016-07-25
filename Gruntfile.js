module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: ['dist/'],
    template: {
      dev: {
        dest: 'dist/client/index.html',
        src: 'client/index.html',
        environment: 'dev'
      },
      prod: {
        dest: 'dist/client/index.html',
        src: 'client/index.html',
        environment: 'prod'
      }
    },
    concat: {
      bower: {
        src: [
          "bower_components/jquery/dist/jquery.min.js",
          "bower_components/angular/angular.min.js",
          "bower_components/angular-route/angular-route.js",
          "bower_components/bootstrap/dist/js/bootstrap.min.js",
          "bower_components/angular-bootstrap/ui-bootstrap.js",
          "bower_components/angular-bootstrap/ui-bootstrap-tpls.js",
          "bower_components/angular-bootstrap-show-errors/src/showErrors.min.js",
          "bower_components/moment/moment.js"
        ],
        dest: 'dist/client/js/bower.js',
        nonull: true
      },
      directives: {
        src: ['client/js/directives/*', 'client/js/filters/*'],
        dest: 'dist/client/js/dir-filters.js'
      },
      services: {
        src: ['client/js/services/*'],
        dest: 'dist/client/js/services.js'
      },
      controllers: {
        src: [
          'client/js/controllers/*',
        ],
        dest: 'dist/client/js/controllers.js'
      },
      prod: {
        src: [
          "bower_components/jquery/dist/jquery.min.js",
          "bower_components/angular/angular.min.js",
          "bower_components/angular-route/angular-route.js",
          "bower_components/bootstrap/dist/js/bootstrap.min.js",
          "bower_components/angular-bootstrap/ui-bootstrap.js",
          "bower_components/angular-bootstrap/ui-bootstrap-tpls.js",
          "bower_components/angular-bootstrap-show-errors/src/showErrors.min.js",
          "bower_components/moment/moment.js",

          'client/js/app.js',
          'client/js/directives/*',
          'client/js/filters/*',
          'client/js/services/*',
          'client/js/controllers/*',
        ],
        dest: 'dist/client/js/app.min.js'
      }
    },
    copy: {
      dev: {
        files: [
          // includes files within path and its sub-directories
          {expand: true, src: ['index.js'], dest: 'dist/'},
          {expand: true, src: ['config.js'], dest: 'dist/'},
          //{expand: true, cwd: 'bower_components/', src: ['*'], dest: 'dist/client/'},
          {expand: true, cwd: 'bower_components/bootstrap/dist/fonts/', src: ['*'], dest: 'dist/client/fonts/'},
          {expand: true, src: ['server/**'], dest: 'dist/'},
          //{expand: true, src: ['client/index.html'], dest: 'dist/'},
          {expand: true, src: ['client/js/app.js'], dest: 'dist/'},
          //{expand: true, src: ['client/js/**'], dest: 'dist/'},
          {expand: true, src: ['client/css/*.css'], dest: 'dist/'},
          {expand: true, src: ['client/img/**'], dest: 'dist/'},
          {expand: true, src: ['client/views/**'], dest: 'dist/'}
        ],
      },
      prod: {
        files: [
          // includes files within path and its sub-directories
          {expand: true, src: ['index.js'], dest: 'dist/'},
          {expand: true, src: ['config.js'], dest: 'dist/'},
          {expand: true, cwd: 'bower_components/bootstrap/dist/fonts/', src: ['*'], dest: 'dist/client/fonts/'},
          {expand: true, src: ['server/**'], dest: 'dist/'},
          {expand: true, src: ['client/css/*.css'], dest: 'dist/'},
          {expand: true, src: ['client/img/**'], dest: 'dist/'},
          {expand: true, src: ['client/views/**'], dest: 'dist/'}
        ],
      }
    },
    less: {
      development: {
        options: {
          paths: ['client/css']
        },
        files: {
          'client/css/app.css': 'client/css/app.less'
        }
      }
    },
    watch: {
      main: {
        files: ['**'],
        tasks: ['dev'],
        options: {
          spawn: false,
          livereload: true
        },
      },
    },
    express: {
      options: {
        // Override defaults here
        // background: false
      },
      dev: {
        options: {
          script: 'dist/index.js'
        }
      },
      prod: {
        options: {
          script: 'path/to/prod/server.js',
          node_env: 'production'
        }
      },
      test: {
        options: {
          script: 'path/to/test/server.js'
        }
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      main: {
        files: {
          'dist/client/js/app.min.js': [
            "bower_components/jquery/dist/jquery.min.js",
            "bower_components/angular/angular.min.js",
            "bower_components/angular-route/angular-route.js",
            "bower_components/bootstrap/dist/js/bootstrap.min.js",
            "bower_components/angular-bootstrap/ui-bootstrap.js",
            "bower_components/angular-bootstrap/ui-bootstrap-tpls.js",
            "bower_components/angular-bootstrap-show-errors/src/showErrors.min.js",
            "bower_components/moment/moment.js",
            'client/js/app.js',
            'client/js/directives/*',
            'client/js/filters/*',
            'client/js/services/*',
            'client/js/controllers/*'
          ]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-hustler');

  // Default task(s).
  grunt.registerTask('prod', ['clean', 'less', 'copy:prod', 'template:prod', 'concat:prod']);
  grunt.registerTask('build', ['clean', 'less', 'copy:dev', 'concat:bower', 'concat:directives', 'concat:services', 'concat:controllers', 'template:dev']);
  grunt.registerTask('dev', ['build', 'express:dev', 'watch']);

};
