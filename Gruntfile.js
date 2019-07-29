module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
      jasmine: {
        pivotal: {
      src: 'src/*.js',
      options: {
        specs: 'spec/*.js'
      }
    }
  }
    });

    grunt.loadNpmTasks('grunt-contrib-jasmine');
};
