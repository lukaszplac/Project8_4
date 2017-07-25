module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
     sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'css/style.css': 'sass/style.sass'
        }
      }
    },
    // imagemin: {
    //   dynamic: {
    //     files: [{
    //         expand: true,
    //         cwd: 'images/',
    //         src: ['**/*.{png,jpg,jpeg,gif}'],
    //         dest: 'images/build/'
    //     }]
    //   }
    // },
    browserSync: {
        bsFiles: {
            src : 'css/*.css',
        },
        options: {
            server: {
                baseDir: "./"
            }
        }
    },
    watch: {
      css: {
        files: ['sass/*.sass'],
        tasks: ['sass'],
        options: {
            livereload: true,
        },
      },
      scripts: {
        files: ['js/*.js'],
        tasks: ['jshint'],
        options: {
            livereload: true,
        },
      }
    },
    jshint: {
      all: ['js/*.js']
    }
  });
  // Load the plugins tasks

  // Default task(s).
  grunt.loadNpmTasks('grunt-sass');
  /*grunt.loadNpmTasks('grunt-contrib-imagemin');*/
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.registerTask('default', ["sass", "jshint", "watch"]);

};
