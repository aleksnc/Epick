module.exports = function(grunt){
  grunt.initConfig({
    jade: {
      compile: {
        files: [{
          cwd: 'source',
          src: ['**/*.jade'],
          dest: 'dest',
          expand: true,
          ext: '.html',
        }]
      },
      options: {
        pretty: true,
      }
    },
    less: {
      development: {
        options: {
          paths: ['source/']
        },
        files: {
          'dest/css/style.css': 'source/css/style.less'
        }
      }
    },
    copy: {
      css: {
        files: [{
          cwd: 'source/css',
          src: '**/*.css',
          dest: 'dest/css',
          expand: true,
        }]
      },
      js: {
        files: [{
          cwd: 'source/js',
          src: '**/*.js',
          dest: 'dest/js',
          expand: true,
        }]
      },
    },
    watch: {
      js: {
        files: ['source/js/**/*.js'],
        tasks: ['copy:js'],
      },
      css: {
        files: ['source/css/**/*.css'],
        tasks: ['copy:css'],
      },
      jade: {
        files: ['source/**/*.jade'],
        tasks: ['jade'],
      },
      less: {
        files: ['source/**/*.less'],
        tasks: ['less'],
      },
      //imagemin: {
      //  files: ['source/**/*.{png,jpg,gif}'],
      //  tasks: ['imagemin'],
      //}
    },

    browserSync: {
      dev: {
        bsFiles: {
          src : [
            'dest/css/*.css',
            'dest/*.html'
          ]
        },
        options: {
          watchTask: true,
          server: 'dest'
        }
      }
    }
  });



  grunt.loadNpmTasks('grunt-contrib-jade');
  //grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.registerTask('default', [
    'copy', 
    'jade',
   // 'browserify',
    'less',
    'browserSync',
    'watch'
  ]);
};
