module.exports = function(grunt){
  grunt.initConfig({
    browserify: {
      dist: {
        files: {
          'public/bundle.js': ['assets/js/app.js']
        }
      }
    },
    watch: {
      scripts: {
        files: ['assets/**/*.*'],
        tasks: ['browserify', 'sass'],
      }
    },
    sass: {
      dist: {
        files: {
          'public/main.css': 'assets/scss/main.scss'
        }
      }
    },
    mochaTest: {
      test: {
        options: {
          clearRequireCache: false // Optionally clear the require cache before running tests (defaults to false)
        },
        src: ['test/**/*.test.js']
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.registerTask('default', ['browserify', 'watch', 'sass']);
  grunt.registerTask('test', ['mochaTest']);
}
