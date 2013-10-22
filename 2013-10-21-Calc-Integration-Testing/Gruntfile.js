module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    qunit: {
      master: {
        options: {
          urls: [ "public/tests/master.html" ]
        }
      }
    }




    grunt.registerTask( "default", [ "qunit" ]);