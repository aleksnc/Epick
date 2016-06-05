module.exports = function(grunt){
  grunt.initConfig({
    image: {
      static: {
        options: {
          pngquant: true,
          optipng: false,
          zopflipng: true,
          advpng: true,
          jpegRecompress: false,
          jpegoptim: true,
          mozjpeg: true,
          gifsicle: true,
          svgo: true
        }
      },
      dynamic: {
        files: [{
          expand: true,
          cwd: 'source/',
          src: ['**/*.{png,jpg,gif,svg}'],
          dest: 'dest/'
        }]
      }
    },
    jade: {
      compile: {
        files: [{
          cwd: 'source',
          src: ['*.jade'],
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
    cmq: {
      options: {
        log: false
      },
      your_target: {
        files: {
          'tmp': ['dest/css/*.css']
        }
      }
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
      imagemin: {
        files: ['source/**/*.{png,jpg,gif}'],
        tasks: ['image'],
      }
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
  grunt.loadNpmTasks('grunt-combine-media-queries');
  grunt.loadNpmTasks('grunt-image');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.registerTask('default', [
    'cmq',
    'image',
    'copy',
    'jade',
    'less',
    'browserSync',
    'watch'
  ]);
};
