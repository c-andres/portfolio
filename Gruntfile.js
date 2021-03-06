module.exports = grunt => {
  grunt.initConfig({
    sass: {
      build: {
        files: [
          {
            src: 'sass/main.scss',
            dest: './public/assets/css/animation.css'
          },
          {
            src: 'sass/nav-menu.scss',
            dest: './public/assets/css/nav-menu.css'
          }
        ]
      }
    },
    watch: {
      scripts: {
        files: ['sass/**.scss'],
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
};
