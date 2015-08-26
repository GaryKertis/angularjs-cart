module.exports = function(grunt) {

    grunt.initConfig({
        ngtemplates: {
            AngularStore: {
                src: 'partials/**.html',
                dest: 'src/angularjs-cart.js',
                options: {
                  append: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-angular-templates');

    grunt.registerTask('default', ['ngtemplates']);

};
