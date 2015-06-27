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
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['browserify', 'watch', 'sass']);
}
